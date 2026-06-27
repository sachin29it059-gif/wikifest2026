import * as React from "react";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { ref, onValue, update, set } from "firebase/database";

function Lobby({ setScreen, playerInfo, gameRoom, gameMode }) {
  const [players, setPlayers] = useState({});
  const [isHost, setIsHost] = useState(false);

  const playersArray = Object.values(players);
  const isReadyToStart = gameMode === "single" ? true : playersArray.length >= 2;

  useEffect(() => {
    if (!gameRoom || !playerInfo.id) return;

    const roomRef = ref(db, `rooms/${gameRoom}`);

    const unsubscribe = onValue(roomRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const currentPlayers = data.players || {};
        setPlayers(currentPlayers);

        if (data.hostId === playerInfo.id) {
          setIsHost(true);
        } else if (!data.hostId) {
          update(roomRef, { hostId: playerInfo.id });
          setIsHost(true);
        }

        const currentPlayersCount = Object.keys(currentPlayers).length;
        if (data.gameStarted === true && (gameMode === "single" || currentPlayersCount >= 2)) {
          setScreen("game");
        }
      } else {
        set(roomRef, {
          hostId: playerInfo.id,
          gameStarted: false,
          currentDatabaseRound: 1, 
          gameFinished: false,     
          players: {
            [playerInfo.id]: {
              id: playerInfo.id,
              name: playerInfo.name,
              realName: playerInfo.realName,
              score: 0,
              streak: 0
            }
          }
        });
        setIsHost(true);
      }
    });

    return () => unsubscribe();
  }, [gameRoom, playerInfo, setScreen, gameMode]);

  // 🎯 FRESH MATCH LAUNCHER WITH LEADERBOARD WIPER
  const handleStartGame = () => {
    if (!isReadyToStart) return; 
    const roomRef = ref(db, `rooms/${gameRoom}`);

    // 🌟 REFRESH LOGIC: Current active players ke scores ko zero karega aur purane bache kachre ko saaf karega
    const refreshedPlayers = {};
    playersArray.forEach((player) => {
      refreshedPlayers[player.id] = {
        id: player.id,
        name: player.name,
        realName: player.realName,
        score: 0,      // 👈 Reset score to 0
        streak: 0     // 👈 Reset streak to 0
      };
    });
    
    // Database me parameters aur fresh leaderboard ek sath push hoga
    update(roomRef, { 
      gameStarted: true,
      currentDatabaseRound: 1, 
      gameFinished: false,
      players: refreshedPlayers // 👈 Overwrites old scores with fresh 0 pts data
    }).then(() => {
      setScreen("game");
    });
  };

  return (
    <div className="w-full max-w-md p-6 bg-[#1e1e24] border border-gray-800 rounded-2xl shadow-2xl text-center mx-auto space-y-6 font-sans">
      <div>
        <span className="text-3xl animate-bounce inline-block">⏳</span>
        <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 tracking-tight mt-2">
          Waiting Lobby Room
        </h2>
        <p className="text-xs text-gray-400 mt-1">
          Give this Room ID to friends: <span className="text-orange-400 font-mono font-bold bg-orange-500/10 px-2 py-0.5 rounded">{gameRoom}</span>
        </p>
      </div>

      <div className="bg-[#121214] border border-gray-800 rounded-xl p-4 text-left space-y-3 max-h-[220px] overflow-y-auto">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Connected SQUADS ({playersArray.length})
          </h3>
          {!isReadyToStart && (
            <span className="text-[10px] text-red-400 animate-pulse bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20 font-bold">
              Need 1 More Player 👥
            </span>
          )}
        </div>
        {playersArray.map((p, idx) => (
          <div key={idx} className="flex items-center justify-between border-b border-gray-900 pb-2 last:border-0 last:pb-0">
            <span className="text-sm font-medium text-gray-200">
              {p.name} <span className="text-xs text-gray-500">({p.realName})</span>
            </span>
            {idx === 0 ? (
              <span className="text-[10px] font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">👑 Host</span>
            ) : (
              <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Ready</span>
            )}
          </div>
        ))}
      </div>

      <div className="pt-2">
        {isHost ? (
          <button
            onClick={handleStartGame}
            disabled={!isReadyToStart}
            className={`w-full py-3 font-bold rounded-xl shadow-lg transition text-sm uppercase tracking-wider ${
              isReadyToStart ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white active:scale-[0.98]" : "bg-gray-800 text-gray-500 cursor-not-allowed"
            }`}
          >
            Launch Match For Everyone
          </button>
        ) : (
          <div className="w-full py-3 bg-gray-800/40 border border-gray-800 text-gray-400 text-xs animate-pulse">
            Waiting for your Room Host to launch the game...
          </div>
        )}
      </div>
    </div>
  );
}

export default Lobby;