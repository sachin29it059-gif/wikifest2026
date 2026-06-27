import * as React from "react";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { ref, onValue } from "firebase/database";

function Leaderboard({ gameRoom }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const playersRef = ref(db, `rooms/${gameRoom}/players`);
    const unsubscribe = onValue(playersRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        // Convert object to array and sort by score descending
        const sortedPlayers = Object.entries(data)
          .map(([id, info]) => ({ id, ...info }))
          .sort((a, b) => b.score - a.score);
        setPlayers(sortedPlayers);
      }
    });

    return () => unsubscribe();
  }, [gameRoom]);

  return (
    <div className="w-full bg-[#121214] border border-gray-800 rounded-xl p-4 space-y-2 max-h-64 overflow-y-auto">
      <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-500 mb-2 flex items-center gap-2">
        📊 Live Standings
      </h3>
      {players.length === 0 ? (
        <p className="text-xs text-gray-600 text-center py-2">Loading ranks...</p>
      ) : (
        players.map((player, index) => (
          <div
            key={player.id}
            className={`flex items-center justify-between p-2.5 rounded-lg text-sm ${
              index === 0
                ? "bg-yellow-500/10 border border-yellow-500/30 text-yellow-400"
                : "bg-[#18181c]"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="font-mono font-bold text-gray-500 w-4">
                {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : index + 1}
              </span>
              <span className="font-medium text-gray-200">{player.name}</span>
            </div>
            <span className="font-mono font-black">{player.score} pts</span>
          </div>
        ))
      )}
    </div>
  );
}

export default Leaderboard; 