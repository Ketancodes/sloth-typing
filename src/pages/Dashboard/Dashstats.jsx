import { useState } from "react";

export default function Dashstats({ stats }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showRaw, setShowRaw] = useState(false);
  return (
    <>
      <div
        className="  grid grid-cols-4 gap-10 mt-3 ml-4 text-white w-[90%] 
      max-sm:grid-cols-2 max-sm:gap-6 max-sm:mt-2 max-sm:ml-0 max-sm:px-3"
      >
        {/* Typed Words */}
        <div
          className="flex flex-col items-center relative"
          onMouseEnter={() => setShowDetails(true)}
          onMouseLeave={() => setShowDetails(false)}
        >
          <p className="text-xl max-sm:text-lg font-normal text-[#8d8b8b] ">
            typed words
          </p>
          <h1 className="text-[34px]  max-sm:text-2xl font-semibold text-[#f8b809] mt-1 font-mono">
            {stats.correctChars}/{stats.incorrectWords}/{stats.extraChars}/
            {stats.missedChars}
          </h1>
          {/* Hover Table */}
          {showDetails && (
            <div className="absolute bottom-[42px] z-20 bg-[#272727] border border-[#555] rounded-lg px-1 py-1.5 shadow-xl w-[110px] text-sm text-white animate-fadeIn">
              <p className="flex justify-center mb-1">
                <span className="text-[#ffffff]">Correct</span>
              </p>

              <p className="flex justify-center mb-1">
                <span className="text-[#ffffff]">Incorrect</span>
              </p>

              <p className="flex justify-center mb-1">
                <span className="text-[#ffffff]">Extra</span>
              </p>

              <p className="flex justify-center">
                <span className="text-[#ffffff]">Missed</span>
              </p>
            </div>
          )}
        </div>

        {/* Consistency */}
        <div className="flex flex-col items-center">
          <p className="text-xl max-sm:text-lg font-normal text-[#8d8b8b] ">
            consistency
          </p>
          <h1 className="text-[34px]  max-sm:text-2xl font-semibold text-[#f8b809] mt-1 font-mono">
            {stats.consistency}%
          </h1>
        </div>

        {/* Raw */}
        <div
          className="flex flex-col items-center relative "
          onMouseEnter={() => setShowRaw(true)}
          onMouseLeave={() => setShowRaw(false)}
        >
          <p className="text-xl max-sm:text-lg font-normal text-[#8d8b8b]">
            raw
          </p>
          <h1 className="text-[34px]  max-sm:text-2xl font-semibold text-[#f8b809] mt-1 font-mono tracking-tight ">
            {stats.rawWPM}/{stats.accuracy}%
          </h1>
          {/* Hover Table */}
          {showRaw && (
            <div className="absolute bottom-[42px] z-20 bg-[#272727] border border-[#555] rounded-lg px-1 py-1.5 shadow-xl w-[130px] text-sm text-white animate-fadeIn">
              <p className="flex justify-center mb-1">
                <span className="text-[#ffffff]">wpm/ accuracy</span>
              </p>
            </div>
          )}
        </div>

        {/* English */}
        <div className="flex flex-col items-center">
          <p className="text-xl max-sm:text-lg font-normal text-[#8d8b8b]">
            english
          </p>
          <h1 className="text-[34px] max-sm:text-2xl font-semibold text-[#f8b809] mt-1 font-mono">
            30s
          </h1>
        </div>
      </div>
      <style>
        {`
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}
      </style>
    </>
  );
}
