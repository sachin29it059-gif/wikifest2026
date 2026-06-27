import React, { useState, useEffect, useRef } from "react";
import JoinScreen from "./components/JoinScreen";
import ModeSelection from "./components/ModeSelection"; 
import Lobby from "./components/Lobby";
import QuestionScreen from "./components/QuestionScreen";
import WinnerScreen from "./components/WinnerScreen";
import { db } from "./firebase/firebaseConfig";
import { ref, update } from "firebase/database";

function App() {
  const [screen, setScreen] = useState("welcome"); 
  const [playerInfo, setPlayerInfo] = useState({ name: "", realName: "", id: "" });
  const [gameRoom, setGameRoom] = useState("sati_event_grand"); 
  const [finalScore, setFinalScore] = useState(0);
  const [gameMode, setGameMode] = useState("many"); 

  const bgAudioRef = useRef(null);

  useEffect(() => {
    bgAudioRef.current = new Audio("/birthday_bg.mp3");
    bgAudioRef.current.loop = true;
    bgAudioRef.current.volume = 0.20; 

    return () => {
      if (bgAudioRef.current) {
        bgAudioRef.current.pause();
      }
    };
  }, []);

  const handleEnterGame = () => {
    if (bgAudioRef.current) {
      bgAudioRef.current.play()
        .then(() => console.log("🎵 Music started!"))
        .catch(err => console.log("Audio play blocked:", err));
    }
    setScreen("join");
  };

  const navigateToScreen = (targetScreen) => {
    if (targetScreen === "game" && gameMode !== "single") {
      const roomRef = ref(db, `rooms/${gameRoom}`);
      update(roomRef, {
        gameStarted: true,
        currentDatabaseRound: 1,
        gameFinished: false
      }).catch(err => console.log("Firebase bypass:", err));
    }
    setScreen(targetScreen);
  };

  const handleResetGame = (targetScreen) => {
    setFinalScore(0); 
    setScreen(targetScreen);
  };

  useEffect(() => {
    if (screen === "winner" && bgAudioRef.current) {
      bgAudioRef.current.pause();
    }
  }, [screen]);

  return (
    <div className="min-h-screen bg-[#121214] text-white font-sans antialiased flex items-center justify-center p-4">
      {screen === "welcome" && (
        <div className="w-full max-w-lg p-5 bg-[#1e1e24] border border-gray-800 rounded-3xl shadow-2xl text-center mx-auto space-y-4 animate-fadeIn">
          <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-inner bg-[#121214]">
            <img 
              src="/wikifest_poster.png" 
              alt="Wiki Fest Poster" 
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>
          <div className="pt-2">
            <h2 className="text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
              Celebrate the Wikipedia Anniversary 🎉
            </h2>
            <p className="text-[11px] text-gray-400 mt-1 uppercase tracking-widest font-bold">
              Presented by Wiki Club SATI
            </p>
          </div>
          <div className="pt-1">
            <button
              onClick={handleEnterGame}
              className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-black uppercase tracking-wider rounded-xl shadow-lg active:scale-[0.99] transition text-xs"
            >
              Enter WikiFest Challenge 🚀
            </button>
          </div>
        </div>
      )}

      {screen === "join" && (
        <JoinScreen setScreen={navigateToScreen} setPlayerInfo={setPlayerInfo} setGameRoom={setGameRoom} />
      )}

      {screen === "mode" && (
        <ModeSelection setScreen={navigateToScreen} gameMode={gameMode} setGameMode={setGameMode} />
      )}

      {screen === "lobby" && (
        <Lobby setScreen={navigateToScreen} playerInfo={playerInfo} gameRoom={gameRoom} gameMode={gameMode} />
      )}

      {screen === "game" && (
        <QuestionScreen
          setScreen={navigateToScreen}
          playerInfo={playerInfo}
          gameRoom={gameRoom}
          setFinalScore={setFinalScore}
          gameMode={gameMode}
        />
      )}

      {screen === "winner" && (
        <WinnerScreen playerInfo={playerInfo} finalScore={finalScore} gameRoom={gameRoom} setScreen={handleResetGame} />
      )}
    </div>
  );
}

export default App;