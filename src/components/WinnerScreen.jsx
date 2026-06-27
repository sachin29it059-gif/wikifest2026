import * as React from "react";
import { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import { db } from "../firebase/firebaseConfig";
import { ref, onValue } from "firebase/database";

function WinnerScreen({ playerInfo, finalScore, setScreen, gameRoom }) {
  const certificateRef = useRef(null);
  const [page, setPage] = useState(1);
  const [livePlayers, setLivePlayers] = useState([]);

  useEffect(() => {
    if (!gameRoom) return;
    const playersRef = ref(db, `rooms/${gameRoom}/players`);
    
    const unsubscribe = onValue(playersRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const sortedPlayers = Object.values(data).sort((a, b) => (b.score || 0) - (a.score || 0));
        setLivePlayers(sortedPlayers);
      }
    });

    return () => unsubscribe();
  }, [gameRoom]);

  const currentPlayerRank = livePlayers.findIndex(p => p.id === playerInfo.id) + 1 || "?";
  const topScore = livePlayers[0]?.score || 185;
  const scoreGap = topScore - finalScore > 0 ? topScore - finalScore : 0;

  const getBadge = (score) => {
    if (score >= 250) return { title: "WikiFest Champion 🏆", desc: "Mindblowing! You are a walking encyclopedia!" };
    if (score >= 180) return { title: "Speed Genius ⚡", desc: "Lightning fast fingers and sharp brain!" };
    if (score >= 100) return { title: "Curious Explorer 🔍", desc: "Great effort! You love deep rabbit holes!" };
    return { title: "Wiki Rabbit 🐇", desc: "Enjoyed the chaos of knowledge!" };
  };

  const badge = getBadge(finalScore);

  const downloadCertificate = () => {
    const element = certificateRef.current;
    if (!element) return;

    html2canvas(element, {
      scale: 3, 
      backgroundColor: "#ffffff", 
      useCORS: true,
      allowTaint: true,
      logging: false,
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = `${playerInfo.realName || "Participant"}_SATI_WikiFest_Certificate.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <div className="w-full max-w-3xl p-6 bg-[#1e1e24] rounded-2xl shadow-2xl border border-gray-800 text-center mx-auto space-y-6 transition-all duration-300">
      
      {/* 🎉 PAGE 1: MATCH OVERVIEW SUMMARY */}
      {page === 1 && (
        <div className="space-y-6 py-6 animate-fadeIn">
          <div>
            <div className="text-7xl mb-4 animate-bounce">🎉</div>
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 tracking-tight mb-2">
              Match Completed!
            </h2>
            <p className="text-sm text-gray-400">
              Fantastic effort, <span className="text-white font-bold">{playerInfo.name}</span>! You crossed the finish line.
            </p>
          </div>

          <div className="bg-[#121214] border border-gray-800 p-6 rounded-2xl max-w-md mx-auto space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block">Your Final Score</span>
              <h1 className="text-5xl font-black text-white font-mono mt-1">
                {finalScore} <span className="text-lg font-normal text-gray-400">pts</span>
              </h1>
            </div>
            <div className="border-t border-gray-800/60 pt-3">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block">Title Badge Earned</span>
              <h3 className="text-xl font-bold text-yellow-400 mt-1">{badge.title}</h3>
              <p className="text-xs text-gray-500 mt-0.5 italic px-4">"{badge.desc}"</p>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => setPage(2)}
              className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold uppercase tracking-wider rounded-xl shadow-lg active:scale-[0.98] transition text-sm"
            >
              See Live Leaderboard Standings 🏆 ➔
            </button>
          </div>
        </div>
      )}

      {/* 🏆 PAGE 2: LIVE COMPETITION RANKS */}
      {page === 2 && (
        <div className="space-y-6 animate-fadeIn max-w-xl mx-auto">
          <div>
            <h2 className="text-3xl font-black text-white tracking-tight flex items-center justify-center gap-2">
              🏆 WikiFest LIVE Leaderboard
            </h2>
            <p className="text-xs text-gray-400 mt-1">Room ID: <span className="text-orange-400 font-mono font-bold">{gameRoom}</span></p>
          </div>

          <div className="bg-[#121214] border border-gray-800 rounded-xl p-4 text-left space-y-2.5">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">📊 TOP STANDINGS</h3>
            {livePlayers.slice(0, 5).map((player, idx) => {
              const medals = ["🥇", "🥈", "🥉", "4 ", "5 "];
              const highlights = [" ⭐🔥", " ⚡", " 🚀", " 📈", ""];
              return (
                <div key={idx} className="flex justify-between items-center text-sm font-mono border-b border-gray-900 pb-2 last:border-0 last:pb-0">
                  <span className="text-gray-300">
                    <span className="mr-2">{medals[idx]}</span> {player.name}
                  </span>
                  <span className="text-white font-bold">
                    {player.score || 0}{highlights[idx]}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="bg-[#121214] border border-gray-800 p-4 rounded-xl text-left font-sans text-xs grid grid-cols-2 gap-3">
            <div>
              <span className="text-gray-500 font-bold uppercase block tracking-wider">YOUR STATUS</span>
              <p className="text-sm font-bold text-white mt-1">🎮 You: #{currentPlayerRank} | <span className="text-orange-400">{finalScore} pts</span></p>
              <p className="text-gray-400 mt-0.5">🔥 Best Match Streak: {playerInfo.streak || 0}</p>
            </div>
            <div className="border-l border-gray-800/80 pl-3">
              <span className="text-gray-500 font-bold uppercase block tracking-wider">LIVE RECOGNITION</span>
              <p className="text-[11px] text-emerald-400 font-medium mt-1">📊 Gap to Top 1: {scoreGap} pts</p>
              <p className="text-[11px] text-yellow-400 font-medium">⚡ Best Rank Achieved</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center pt-2">
            <button
              onClick={() => setPage(1)}
              className="px-5 py-3 bg-gray-800 text-gray-400 font-bold rounded-xl hover:bg-gray-700 transition text-xs uppercase"
            >
              ⬅ Back
            </button>
            <button
              onClick={() => setPage(3)}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold uppercase tracking-wider rounded-xl shadow-lg active:scale-[0.98] transition text-sm"
            >
              Generate Certificate 📜 ➔
            </button>
          </div>
        </div>
      )}

      {/* 📜 PAGE 3: HD CERTIFICATE GENERATOR PANEL */}
      {page === 3 && (
        <div className="space-y-6 animate-fadeIn">
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight">📜 Official Certificate Verification</h2>
            <p className="text-xs text-gray-400 mt-1">Your verified print-ready documentation badge is prepared below</p>
          </div>

          {/* CERTIFICATE PREVIEW CONTAINER */}
          <div className="border border-blue-500/20 rounded-xl overflow-x-auto p-2 bg-[#121214] shadow-inner">
            <div 
              ref={certificateRef}
              style={{
                width: "840px", 
                height: "540px",
                padding: "40px 40px",
                backgroundColor: "#ffffff", 
                color: "#000000", 
                fontFamily: "'Georgia', serif",
                border: "14px double #0056b3", 
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
                boxSizing: "border-box",
                margin: "0 auto"
              }}
            >
              <div style={{ position: "absolute", top: "12px", left: "12px", fontSize: "1rem", opacity: 0.3, color: "#0056b3" }}>✦</div>
              <div style={{ position: "absolute", bottom: "12px", right: "12px", fontSize: "1rem", opacity: 0.3, color: "#0056b3" }}>✦</div>

              {/* 🏆 HEADER LOGO STRIP LAYER */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", borderBottom: "1px solid #e2e8f0", paddingBottom: "12px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "140px" }}>
                  <img src="/wiki_logo.png" alt="Wiki Club SATI" style={{ height: "46px", width: "auto", objectFit: "contain" }} />
                  <span style={{ fontSize: "0.55rem", color: "#4a5568", fontFamily: "sans-serif", fontWeight: "bold", marginTop: "4px" }}>WIKI CLUB SATI</span>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "240px" }}>
                  <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: "900", color: "#dd6b20", fontFamily: "sans-serif", letterSpacing: "1px" }}>WIKIFEST 2026</h3>
                  <span style={{ fontSize: "0.55rem", color: "#718096", fontFamily: "sans-serif", fontWeight: "bold", marginTop: "2px", letterSpacing: "0.5px" }}>KNOWLEDGE CHALLENGE CAMPUS</span>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "140px" }}>
                  <img src="/wikipedia_logo.png" alt="Wikipedia" style={{ height: "46px", width: "auto", objectFit: "contain" }} />
                  <span style={{ fontSize: "0.55rem", color: "#4a5568", fontFamily: "sans-serif", fontWeight: "bold", marginTop: "4px" }}>WIKIPEDIA 25 YEARS</span>
                </div>
              </div>

              {/* MAIN CONTENT AREA */}
              <div style={{ margin: "15px 0" }}>
                <h1 style={{ fontSize: "1.8rem", fontWeight: "800", color: "#2d3748", margin: "0 0 2px 0", letterSpacing: "1px" }}>
                  CERTIFICATE OF RECOGNITION
                </h1>
                <p style={{ color: "#718096", fontSize: "0.72rem", fontFamily: "sans-serif", fontWeight: "bold", letterSpacing: "1.5px", textTransform: "uppercase", margin: "0 0 10px 0" }}>
                  This Certificate is proudly presented to
                </p>

                <h2 style={{ 
                  color: "#1a365d", 
                  fontSize: "2.2rem", 
                  fontWeight: "bold",
                  margin: "2px 0", 
                  paddingBottom: "4px",
                  borderBottom: "2px solid #cbd5e0",
                  display: "inline-block",
                  minWidth: "440px"
                }}>
                  {playerInfo.realName || "Participant Name"}
                </h2> 

                <p style={{ color: "#4a5568", fontSize: "0.85rem", maxWidth: "680px", margin: "10px auto 0 auto", lineHeight: "1.5", fontFamily: "sans-serif" }}>
                  in recognition of active participation, outstanding response velocity, and demonstrating commendable analytical depth in the <b>WikiFest Challenge Knowledge Portal</b> celebrating the historical 25th Birthday Milestone of Wikipedia.
                </p>
              </div>

              {/* MIDDLE BADGE BANNERS */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "25px", margin: "5px 0 10px 0", width: "100%" }}>
                <img src="/wikipedia_25.png" alt="Wikipedia 25 Year Badge Line" style={{ height: "42px", width: "auto", objectFit: "contain" }} />
                <img src="/wiki_birthday_logo.png" alt="Wiki Birthday Mascot Logo" style={{ height: "55px", width: "auto", objectFit: "contain" }} />
              </div>

              {/* FOOTER SIGNATURE SECTION */}
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "0 10px", marginTop: "10px", alignItems: "flex-end" }}>
                <div style={{ textAlign: "left" }}>
                  {/* 🌟 DATE UPDATED HERE EXACTLY AS REQUESTED */}
                  <p style={{ margin: "0", fontSize: "0.75rem", color: "#718096", fontFamily: "sans-serif" }}>Date: 18 July 2026</p>
                  <div style={{ borderTop: "1px solid #cbd5e0", marginTop: "4px", width: "110px" }}></div>
                  <p style={{ margin: "2px 0 0 0", fontSize: "0.65rem", color: "#a0aec0", fontFamily: "sans-serif" }}>Event Coordinator</p>
                </div>
                
                <div style={{ textAlign: "center" }}>
                  <span style={{ border: "1px dashed #dd6b20", padding: "3px 10px", borderRadius: "4px", fontSize: "0.6rem", color: "#dd6b20", fontFamily: "sans-serif", fontWeight: "bold", display: "inline-block", transform: "rotate(-3deg)", backgroundColor: "#fffaf0" }}>
                    SATI VERIFIED
                  </span>
                </div>

                <div style={{ textAlign: "right" }}>
                  <p style={{ margin: "0", fontWeight: "bold", color: "#2d3748", fontSize: "0.75rem", fontFamily: "sans-serif" }}>Wiki Club SATI</p>
                  <div style={{ borderTop: "1px solid #cbd5e0", marginTop: "4px", width: "120px" }}></div>
                  <p style={{ margin: "2px 0 0 0", fontSize: "0.65rem", color: "#a0aec0", fontFamily: "sans-serif" }}>Club Mentor</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 max-w-xl mx-auto">
            <button
              onClick={() => setPage(2)}
              className="px-4 py-3 bg-gray-800 text-gray-400 font-bold rounded-xl hover:bg-gray-700 transition text-xs uppercase"
            >
              ⬅ Leaderboard
            </button>
            
            <button
              onClick={downloadCertificate}
              className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold uppercase rounded-xl shadow-md text-sm transition"
            >
              📥 Download PNG
            </button>

            <button
              onClick={() => setScreen("join")}
              className="flex-1 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase rounded-xl transition text-sm shadow-md"
            >
              🔄 Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WinnerScreen;