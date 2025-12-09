// import {
//   ListFilterPlus,
//   ClipboardPenLine,
//   Languages,
//   AlarmClock,
//   Trophy,
//   BellRing,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Optionbar() {
//   return (
//     <>
//       <div className="flex items-center justify-between mx-auto ">
//         <div className="h-10 w-[40%] bg-[#3e3f3f] mx-auto mt-4 rounded-xl flex items-center justify-around text-[#a8a5a5] text-sm">
//           <button className="flex gap-2 items-center hover:text-[#f5f2f2] cursor-pointer transition duration-200">
//             {" "}
//             <Languages size={16} />
//             English
//           </button>
//           <button className="flex gap-2 items-center hover:text-[#f3eeee] cursor-pointer transition duration-200">
//             {" "}
//             <ListFilterPlus size={16} />
//             Symbols
//           </button>
//           <button className="flex gap-2 items-center hover:text-[#f5f0f0] cursor-pointer transition duration-200">
//             {" "}
//             <ClipboardPenLine size={14} />
//             Custom
//           </button>
//           <button className="flex gap-2 items-center hover:text-[#f7f2f2] cursor-pointer  transition duration-200">
//             <AlarmClock size={14} />
//             Time
//           </button>
//         </div>
//         <div className="flex items-center gap-10 text-[#9c9898] mr-8 mt-5">
//           <div className="relative group">
//             <Link to="/leaderboard" className="hover:text-[#f5f0f0]">
//               <Trophy size={22} />
//             </Link>
//             <div
//               className="absolute left-1/2 -translate-x-1/2 top-full mt-2.5 ml-3 px-2 py-1 text-sm rounded-lg bg-[#2d2e2e] text-[#f5f5f5] shadow-md
//                   opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 whitespace-nowrap"
//             >
//               leaderboard
//             </div>
//           </div>
//           <div className="relative group">
//             <button className="hover:text-[#f5f0f0] cursor-pointer">
//               <BellRing size={24} />
//             </button>
//             <div
//               className="absolute left-1/2 -translate-x-1/2 top-full mt-2.5 -ml-3 px-2 py-1 text-sm rounded-lg bg-[#2d2e2e] text-[#f5f5f5] shadow-md
//                   opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 whitespace-nowrap"
//             >
//               notification
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import {
  ListFilterPlus,
  ClipboardPenLine,
  Languages,
  AlarmClock,
  Trophy,
  BellRing,
  SlidersHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Optionbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // close if clicked outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-between mx-auto max-sm:-ml-6">
      {/* DESKTOP OPTIONS */}
      <div className="hidden md:flex h-10 w-[40%] bg-[#3e3f3f] mx-auto mt-4 rounded-xl items-center justify-around text-[#a8a5a5] text-sm">
        <button className="flex gap-2 items-center hover:text-[#f5f2f2] transition duration-200">
          <Languages size={16} />
          English
        </button>
        <button className="flex gap-2 items-center hover:text-[#f3eeee] transition duration-200">
          <ListFilterPlus size={16} />
          Symbols
        </button>
        <button className="flex gap-2 items-center hover:text-[#f5f0f0] transition duration-200">
          <ClipboardPenLine size={14} />
          Custom
        </button>
        <button className="flex gap-2 items-center hover:text-[#f7f2f2] transition duration-200">
          <AlarmClock size={14} />
          Time
        </button>
      </div>

      {/* MOBILE OPTIONS BUTTON */}
      <div className="md:hidden mx-auto mt-4 relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 bg-[#3e3f3f] text-[#b7b4b4] px-4 py-2 rounded-xl hover:text-white transition"
        >
          <SlidersHorizontal size={18} />
          Options
        </button>

        {open && (
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-36 bg-[#3a3a3a] text-[#e6e6e6] rounded-lg shadow-xl flex flex-col z-20">
            <button className="px-3 py-2 flex gap-2 items-center hover:bg-[#4a4a4a] transition">
              <Languages size={14} /> English
            </button>
            <button className="px-3 py-2 flex gap-2 items-center hover:bg-[#4a4a4a] transition">
              <ListFilterPlus size={14} /> Symbols
            </button>
            <button className="px-3 py-2 flex gap-2 items-center hover:bg-[#4a4a4a] transition">
              <ClipboardPenLine size={14} /> Custom
            </button>
            <button className="px-3 py-2 flex gap-2 items-center hover:bg-[#4a4a4a] transition">
              <AlarmClock size={14} /> Time
            </button>
          </div>
        )}
      </div>

      {/* RIGHT SIDE (unchanged) */}
      <div className="flex items-center gap-10 text-[#9c9898] mr-8 mt-5">
        <div className="relative group">
          <Link to="/leaderboard" className="hover:text-[#f5f0f0]">
            <Trophy size={22} />
          </Link>
          <div
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2.5 px-2 py-1 text-sm rounded-lg bg-[#2d2e2e] text-[#f5f5f5] shadow-md 
              opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 whitespace-nowrap"
          >
            leaderboard
          </div>
        </div>
        <div className="relative group">
          <button className="hover:text-[#f5f0f0]">
            <BellRing size={24} />
          </button>
          <div
            className="absolute left-1/2 -translate-x-[65%] top-full mt-2.5 px-2 py-1 text-sm rounded-lg bg-[#2d2e2e] text-[#f5f5f5] shadow-md 
              opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 whitespace-nowrap"
          >
            notification
          </div>
        </div>
      </div>
    </div>
  );
}
