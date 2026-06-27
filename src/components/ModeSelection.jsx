import * as React from "react";

function ModeSelection({ setScreen, gameMode, setGameMode }) {
  const handleModeSelect = (mode) => {
    setGameMode(mode);
    if (mode === "single") {
      setScreen("game"); // 👤 Single player bypasses the lobby completely to avoid crashes
    } else {
      setScreen("lobby"); // 👥 Duo & Many will wait in the multiplayer lobby
    }
  };

  return (
    <div className="w-full max-w-md p-6 bg-[#1e1e24] border border-gray-800 rounded-2xl shadow-2xl text-center mx-auto space-y-6 font-sans">
      <div>
        <span className="text-3xl">🎮</span>
        <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 tracking-tight mt-2">
          Select Game Mode
        </h2>
        <p className="text-xs text-gray-400 mt-1">Choose how you want to conquer WikiFest</p>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <button
          type="button"
          onClick={() => handleModeSelect("single")}
          className="group flex items-center justify-between p-4 bg-[#121214] border border-gray-800 rounded-xl hover:border-orange-500 hover:bg-orange-500/5 transition duration-200 text-left w-full"
        >
          <div>
            <h3 className="text-sm font-bold text-white group-hover:text-orange-400 transition">
              Single Player 👤
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">Quick solo practice speedrun</p>
          </div>
          <span className="text-gray-600 group-hover:text-orange-400 text-xs font-mono">⚡ Instant</span>
        </button>

        <button
          type="button"
          onClick={() => handleModeSelect("double")}
          className="group flex items-center justify-between p-4 bg-[#121214] border border-gray-800 rounded-xl hover:border-blue-500 hover:bg-blue-500/5 transition duration-200 text-left w-full"
        >
          <div>
            <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition">
              Duo Challenge 👥
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">1v1 faceoff with your best friend</p>
          </div>
          <span className="text-gray-600 group-hover:text-blue-400 text-xs font-mono">Lobby Wait</span>
        </button>

        <button
          type="button"
          onClick={() => handleModeSelect("many")}
          className="group flex items-center justify-between p-4 bg-[#121214] border border-gray-800 rounded-xl hover:border-emerald-500 hover:bg-emerald-500/5 transition duration-200 text-left w-full"
        >
          <div>
            <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition">
              Multiplayer Party 🎉
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">Play with your entire class squad live</p>
          </div>
          <span className="text-emerald-500/20 group-hover:text-emerald-400 text-xs bg-emerald-500/10 px-2 py-0.5 rounded font-bold">Lobby Wait</span>
        </button>
      </div>
    </div>
  );
}

export default ModeSelection;