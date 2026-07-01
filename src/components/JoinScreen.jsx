import * as React from "react";
import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { ref, set } from "firebase/database";

function JoinScreen({ setScreen, setPlayerInfo, setGameRoom }) {
  const [name, setName] = useState("");
  const [realName, setRealName] = useState(""); 
  const [room, setRoom] = useState("wikifest_final_2026");
  const [loading, setLoading] = useState(false);

  const handleJoin = async (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Oye! Game ke liye ek mazaedar Nickname daalo! 😎");
    if (!realName.trim()) return alert("Certificate ke liye apna Real Name bhi daal do bhai! 📜");

    setLoading(true);
    const playerId = "player_" + Math.random().toString(36).substr(2, 9);

    try {
      // 🚀 Player data ko database mein store karna uske specific room path par
      const playerRef = ref(db, `rooms/${room}/players/${playerId}`);
      await set(playerRef, {
        id: playerId,
        name: name.trim(),
        realName: realName.trim(), 
        score: 0,
        streak: 0,
        joinedAt: Date.now()
      });

      // 🧠 React Main States setting
      setPlayerInfo({ name: name.trim(), realName: realName.trim(), id: playerId });
      setGameRoom(room);
      
      setLoading(false);
      
      // 🔥 CRITICAL FIX HERE: Pehle ye direct game ya dusri jagah jump kar raha tha.
      // Ab ye directly hamari banayi hui "ModeSelection" screen par hi bhejega!
      setScreen("mode"); 

    } catch (error) {
      console.error("Firebase join crash details:", error);
      setLoading(false);
      alert("Database error! Please check network connection.");
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-[#1e1e24] border border-gray-800 rounded-3xl shadow-2xl text-center mx-auto space-y-6 font-sans">
      <div>
        <span className="text-4xl">🎂</span>
        <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 tracking-tight mt-2">
          WikiFest Challenge
        </h1>
        <p className="text-xs text-gray-400 mt-1">Wikipedia 25th Birthday Celebration & Quiz</p>
      </div>

      <form onSubmit={handleJoin} className="space-y-4 text-left">
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
            Game Nickname (Short & Fun) 🦊
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., WikiRabbit 🐇"
            className="w-full px-4 py-3 bg-[#121214] border border-gray-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500 transition"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
            Your Full Real Name (For Certificate) 📜
          </label>
          <input
            type="text"
            value={realName}
            onChange={(e) => setRealName(e.target.value)}
            placeholder="e.g., Sachin Kumar"
            className="w-full px-4 py-3 bg-[#121214] border border-gray-800 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500 transition"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
            Room ID (For Friends) 🔑
          </label>
          <input
            type="text"
            value={room}
            onChange={(e) => setRoom(e.target.value || "wiki_sati_2026")}
            placeholder="wiki_sati_2026"
            className="w-full px-4 py-3 bg-[#121214] border border-gray-800 rounded-xl text-white text-sm font-mono focus:outline-none focus:border-orange-500 transition"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 mt-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold uppercase tracking-wider rounded-xl shadow-lg active:scale-[0.99] transition text-sm disabled:opacity-50"
        >
          {loading ? "Connecting to Portal..." : "Join Party Room 🚀"}
        </button>
      </form>
    </div>
  );
}

export default JoinScreen;