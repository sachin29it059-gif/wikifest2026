import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase/firebaseConfig";
import { ref, onValue, update } from "firebase/database";
import * as QuestionData from "../Data/questions.js";

function QuestionScreen({ setScreen, playerInfo, gameRoom, setFinalScore, gameMode }) {
  const [allPlayers, setAllPlayers] = useState({});
  const [currentRound, setCurrentRound] = useState(1); 
  const [showMiniLeaderboard, setShowMiniLeaderboard] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [roomHostId, setRoomHostId] = useState(""); 

  // 🎵 AUDIO ENGINE REFERENCE
  const correctAudioRef = useRef(new Audio("/correct.mp3")); 
  const wrongAudioRef = useRef(new Audio("/wrong.mp3"));

  // 👑 SAFE STRUCTURAL BINARY CHECK
  const isSingle = gameMode === "single";
  const isHost = isSingle || (playerInfo?.id && roomHostId === playerInfo.id);

  // 🛡️ SECURITY LAYER 1: DISABLE RIGHT-CLICK & INSPECT ELEMENT KEYS (F12 / CTRL+SHIFT+I)
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U completely
      if (
        e.keyCode === 123 || 
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || 
        (e.ctrlKey && e.keyCode === 85)
      ) {
        e.preventDefault();
        alert("🚨 WikiFest Security: Inspect element / Developer options are completely locked during the live quiz! 😎");
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // 🛡️ SECURITY LAYER 2: DETECT TAB SWITCH ATTACK (ANTI-SEARCH MONITORING)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && !isSingle) {
        console.warn("Security Alert: Active player left the quiz layout screen or switched tabs.");
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [isSingle]);

  // 👥 Live sync listener setup for multiplayer modes
  useEffect(() => {
    if (isSingle || !gameRoom) return;
    const roomRef = ref(db, `rooms/${gameRoom}`);
    
    const unsubscribe = onValue(roomRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setAllPlayers(data.players || {});
        setRoomHostId(data.hostId || ""); 

        if (data.currentDatabaseRound && !isNaN(data.currentDatabaseRound)) {
          const dbRound = Number(data.currentDatabaseRound);
          if (dbRound !== currentRound) {
            setCurrentRound(dbRound);
            setShowMiniLeaderboard(false);
            setCurrentQuestionIdx(0);
          }
        }

        if (data.gameFinished === true) {
          setScreen("winner");
        }
      }
    });

    return () => unsubscribe();
  }, [gameRoom, currentRound, isSingle, setScreen]);

  // Extract array cleanly
  let questionsList = [];
  if (QuestionData) {
    if (Array.isArray(QuestionData.wikiQuestions)) {
      questionsList = QuestionData.wikiQuestions;
    } else if (Array.isArray(QuestionData.questions)) {
      questionsList = QuestionData.questions;
    } else if (Array.isArray(QuestionData.default)) {
      questionsList = QuestionData.default;
    } else if (Array.isArray(QuestionData)) {
      questionsList = QuestionData;
    }
  }

  const getRoundConfig = (roundNum) => {
    const validatedNum = (roundNum >= 1 && roundNum <= 4) ? roundNum : 1;
    switch (validatedNum) {
      case 1: return { name: "Emoji Encyclopedia", total: 7, startIndex: 0 };
      case 2: return { name: "Real or Fake Wikipedia?", total: 8, startIndex: 7 }; 
      case 3: return { name: "Audience Poll Madness", total: 5, startIndex: 15 };  
      case 4: return { name: "Wiki Detective", total: 7, startIndex: 20 };       
      default: return { name: "Emoji Encyclopedia", total: 7, startIndex: 0 };
    }
  };

  const roundConfig = getRoundConfig(currentRound);
  const globalQuestionIndex = roundConfig.startIndex + currentQuestionIdx;
  
  const targetIndex = (globalQuestionIndex < questionsList.length) ? globalQuestionIndex : 0;
  const rawQuestion = questionsList.length > 0 ? questionsList[targetIndex] : null;

  const handleAnswerSubmit = (selectedOption) => {
    let newScore = score;
    
    if (rawQuestion && selectedOption === rawQuestion.answer) {
      newScore = score + 10;
      setScore(newScore);
      
      if (correctAudioRef.current) {
        correctAudioRef.current.currentTime = 0;
        correctAudioRef.current.play().catch(err => console.log("Sound error:", err));
      }

      if (!isSingle && playerInfo?.id) {
        update(ref(db, `rooms/${gameRoom}/players/${playerInfo.id}`), { score: newScore });
      }
    } else {
      if (wrongAudioRef.current) {
        wrongAudioRef.current.currentTime = 0;
        wrongAudioRef.current.play().catch(err => console.log("Sound error:", err));
      }
    }

    if (currentQuestionIdx < (roundConfig.total - 1)) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      setShowMiniLeaderboard(true);
      if (currentRound === 4) {
        setFinalScore(newScore);
      }
    }
  };

  const handleNextRoundTrigger = () => {
    if (currentRound < 4) {
      const nextRoundVal = currentRound + 1;
      if (isSingle) {
        setCurrentRound(nextRoundVal);
        setShowMiniLeaderboard(false);
        setCurrentQuestionIdx(0);
      } else {
        const roomRef = ref(db, `rooms/${gameRoom}`);
        update(roomRef, { currentDatabaseRound: nextRoundVal });
      }
    } else {
      if (isSingle) {
        setScreen("winner");
      } else {
        const roomRef = ref(db, `rooms/${gameRoom}`);
        update(roomRef, { gameFinished: true });
      }
    }
  };

  if (!rawQuestion) {
    return (
      <div className="w-full max-w-md p-6 bg-[#1e1e24] border border-gray-800 rounded-2xl text-center text-gray-400 mx-auto space-y-2">
        <div className="w-8 h-8 border-4 border-t-orange-500 border-gray-800 rounded-full animate-spin mx-auto mb-2"></div>
        <p className="text-sm">Initializing Quiz Database...</p>
      </div>
    );
  }

  const sortedPlayers = isSingle 
    ? [{ id: "solo", name: playerInfo.name || "You", realName: "Solo Racer", score: score }]
    : Object.values(allPlayers).sort((a, b) => b.score - a.score).slice(0, 5);

  if (showMiniLeaderboard) {
    return (
      <div className="w-full max-w-md p-6 bg-[#1e1e24] border border-gray-800 rounded-2xl shadow-2xl text-center mx-auto space-y-5 font-sans">
        <div>
          <span className="text-4xl animate-bounce inline-block">📊</span>
          <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 tracking-tight mt-1">
            Round {currentRound} Standings
          </h2>
          <p className="text-xs text-yellow-500 font-bold mt-1 uppercase tracking-wider">
            Completed: {roundConfig.name}
          </p>
        </div>

        <div className="bg-[#121214] border border-gray-800 rounded-xl p-3 text-left space-y-2 max-h-[220px] overflow-y-auto">
          {sortedPlayers.map((player, idx) => {
            const isMe = isSingle || player.id === playerInfo?.id;
            const rankMedal = idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : "⚡";
            
            return (
              <div 
                key={idx} 
                className={`flex items-center justify-between p-2.5 rounded-xl border ${
                  isMe ? "bg-orange-500/10 border-orange-500/40" : "bg-[#1a1a1e] border-gray-900"
                }`}
              >
                <div className="flex items-center space-x-2.5 overflow-hidden">
                  <span className="text-sm flex-shrink-0">{rankMedal}</span>
                  <span className="text-xs font-bold text-gray-200 truncate">
                    {player.name} <span className="text-[10px] text-gray-500 font-normal">({player.realName || "Player"})</span>
                  </span>
                </div>
                <span className="text-xs font-mono font-black text-orange-400">
                  {player.score || 0} pts
                </span>
              </div>
            );
          })}
        </div>

        <div className="pt-1">
          {isHost ? (
            <button 
              onClick={handleNextRoundTrigger} 
              className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-black uppercase tracking-wider rounded-xl shadow-lg transition text-xs block"
            >
              {currentRound < 4 ? `🚀 Advance to Round ${currentRound + 1}` : "🏆 View Final Results"}
            </button>
          ) : (
            <div className="w-full py-3.5 bg-gray-800/40 border border-gray-800 text-gray-400 font-bold rounded-xl text-xs animate-pulse flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-orange-400 animate-ping"></span>
              Waiting for Room Host to advance next round... ⏳
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md p-6 bg-[#1e1e24] border border-gray-800 rounded-2xl shadow-2xl text-center mx-auto space-y-6 font-sans">
      <div>
        <div className="text-orange-400 text-xs font-black uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20 inline-block mb-2">
          Round {currentRound}: {roundConfig.name}
        </div>
        <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider block">
          Question {currentQuestionIdx + 1} of {roundConfig.total}
        </p>
        <h2 className="text-base font-bold mt-3 text-gray-100 leading-snug">{rawQuestion.question}</h2>
      </div>

      <div className="flex flex-col gap-3 pt-1">
        {rawQuestion.options && rawQuestion.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswerSubmit(option)}
            className="w-full p-4 bg-[#121214] border border-gray-800 rounded-xl hover:border-orange-500 text-sm font-medium transition text-left flex items-center shadow-md"
          >
            <span className="text-orange-400 font-mono font-bold mr-4 bg-orange-500/10 px-2 py-1 rounded border border-orange-500/20 flex-shrink-0">
              {idx === 0 ? "A" : idx === 1 ? "B" : idx === 2 ? "C" : "D"}
            </span>
            <span className="text-gray-200">{option}</span>
          </button>
        ))}
      </div>

      <div className="text-right text-xs text-gray-500 font-mono">
        Your Score: <span className="text-orange-400 font-bold">{score}</span>
      </div>
    </div>
  );
}

export default QuestionScreen;