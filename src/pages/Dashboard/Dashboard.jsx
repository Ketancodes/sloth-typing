import Dashgraph from "./Dashgraph";
import Dashtop from "./Dashtop";
import Dashstats from "./Dashstats";
import { RotateCcw, ScreenShare } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { state } = useLocation();
  const {
    rawWPM = 0,
    netWPM = 0,
    accuracy = 0,
    consistency = 0,
    wpmHistory = [],
    errorHistory = [],

    correctWords = 0,
    incorrectWords = 0,
    correctChars = 0,
    incorrectChars = 0,
    extraChars = 0,
    missedChars = 0,
    totalTyped = 0,
    duration = "30s",
  } = state || {};
  const stats = {
    rawWPM,
    netWPM,
    accuracy,
    consistency,
    wpmHistory,
    errorHistory,

    correctWords,
    incorrectWords,
    correctChars,
    incorrectChars,
    extraChars,
    missedChars,
    totalTyped,
    duration,
  };
  const navigate = useNavigate();

  const handleRestart = () => {
    // Navigate home
    navigate("/");

    // Give React a moment to load page, then focus input
    setTimeout(() => {
      const input = document.getElementById("typing-input");
      if (input) input.focus();
    }, 50);
  };
  // const { wpmHistory = [], burstHistory = [] } = state || {};

  return (
    <div className="flex flex-col flex-grow  bg-[#444546] text-white">
      {/* Top section with stats + graph */}
      <div className="flex justify-between items-start w-full mb-6 max-sm:flex-col max-sm:gap-4 max-sm:px-3">
        {/* Left: WPM + Accuracy */}
        <Dashtop wpm={Math.ceil(netWPM)} accuracy={Math.round(accuracy)} />

        {/* Right: Graph placeholder */}
        <div className="w-[70%] h-[250px] bg-[#434446] rounded-xl   flex items-center justify-center text-gray-400 text-lg   max-sm:w-full max-sm:h-[220px]">
          <Dashgraph history={wpmHistory} errorHistory={errorHistory} />
        </div>
      </div>
      <Dashstats stats={stats} />
      <div className="flex justify-center gap-8 mt-8 mb-4">
        <div className="relative group">
          <button
            className="px-6 py-2  text-[#9c9797] hover:text-[#d3cdcd] cursor-pointer font-semibold transition"
            onClick={handleRestart}
          >
            <RotateCcw size={25} />
          </button>
          <div
            className="absolute left-1/2 -translate-x-1/2 top-full max-sm:bottom-full max-sm:top-auto max-sm:mb-1 mt-1 ml-3 px-2 py-1 text-sm rounded-lg bg-[#2d2e2e] text-[#f5f5f5] shadow-md 
                  opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 whitespace-nowrap"
          >
            restart test
          </div>
        </div>
        <div className="relative group">
          <button className="px-6 py-2 bg-transparent text-[#9c9797] hover:text-[#d3cdcd] cursor-pointer font-semibold  transition">
            <ScreenShare size={25} />
          </button>
          <div
            className="absolute left-1/2 -translate-x-1/2 top-full max-sm:bottom-full max-sm:top-auto max-sm:mb-1 mt-1 ml-3 px-2 py-1 text-sm rounded-lg bg-[#2b2c2c] text-[#f5f5f5] shadow-md 
                  opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 whitespace-nowrap"
          >
            share
          </div>
        </div>
      </div>
    </div>
  );
}
