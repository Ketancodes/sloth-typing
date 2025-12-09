// import {
//   CodeXml,
//   Github,
//   CircleDollarSign,
//   FileTerminal,
//   UserLock,
//   ShieldCheck,
//   GitBranch,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <>
//       <footer className="flex items-center  h-10 w-[98%] mx-1  mt-auto">
//         <div className="flex items-center gap-6 ml-2 text-[#9c9797] text-[13px]  ">
//           <a
//             href="https//www.google.com
//             // "
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-1 hover:text-[#d6d3d3]"
//           >
//             {" "}
//             <CodeXml size={14} />
//             discord
//           </a>
//           <a
//             href="open.github.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-1 hover:text-[#d6d3d3]"
//           >
//             <Github size={14} />
//             github
//           </a>
//           <Link className="flex items-center gap-1 hover:text-[#d6d3d3] ">
//             <CircleDollarSign size={14} /> support{" "}
//           </Link>
//           <Link
//             to="/terms"
//             className="flex items-center gap-1 hover:text-[#d6d3d3]"
//           >
//             <FileTerminal size={14} />
//             terms
//           </Link>
//           <Link
//             to="/privacy"
//             className="flex items-center gap-1 hover:text-[#d6d3d3]"
//           >
//             <UserLock size={14} />
//             privacy
//           </Link>
//           <Link
//             to="/security"
//             className="flex items-center gap-1 hover:text-[#d6d3d3]"
//           >
//             <ShieldCheck size={14} />
//             security
//           </Link>
//         </div>

//         {/* info part */}
//         <div className="flex items-center text-[#9c9797]  text-sm ml-7 w-full">
//           <span className="font-xl text-xl mr-4  ">|</span>
//           <span class="w-4 h-4 flex  items-center justify-center rounded-full border text-sm">
//             C
//           </span>
//           <span className="ml-1 text-sm">2025 Sloth Typing</span>
//           <span className="font-xl text-xl ml-5 ">|</span>
//           <span className="flex items-center gap-1 text-sm ml-4">
//             Built with <span className="text-[#ff0000]">❤️</span> and "passion"
//           </span>
//           <div className="flex  items-center ml-auto text-md gap-1.5 text-[#9c9797] hover:text-[#e0dada] cursor-pointer ">
//             <GitBranch size={16} /> 1.1.1
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

import {
  CodeXml,
  Github,
  CircleDollarSign,
  FileTerminal,
  UserLock,
  ShieldCheck,
  GitBranch,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="
        flex items-center
        h-auto md:h-10
        w-[98%] mx-1 mt-auto
        flex-col md:flex-row
      "
    >
      {/* LEFT SIDE LINKS */}
      <div
        className="
          flex items-center
          gap-3 md:gap-6
          ml-0 md:ml-2
          text-[#9c9797]
          text-[12px] md:text-[13px]
          flex-wrap md:flex-nowrap
          justify-center md:justify-start
        "
      >
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-[#d6d3d3]"
        >
          <CodeXml size={14} />
          discord
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-[#d6d3d3]"
        >
          <Github size={14} />
          github
        </a>

        <Link className="flex items-center gap-1 hover:text-[#d6d3d3]">
          <CircleDollarSign size={14} /> support
        </Link>

        <Link
          to="/terms"
          className="flex items-center gap-1 hover:text-[#d6d3d3]"
        >
          <FileTerminal size={14} />
          terms
        </Link>

        <Link
          to="/privacy"
          className="flex items-center gap-1 hover:text-[#d6d3d3]"
        >
          <UserLock size={14} />
          privacy
        </Link>

        <Link
          to="/security"
          className="flex items-center gap-1 hover:text-[#d6d3d3]"
        >
          <ShieldCheck size={14} />
          security
        </Link>
      </div>

      {/* RIGHT SIDE INFO PART */}
      <div
        className="
          flex items-center
          text-[#9c9797]
          text-[12px] md:text-sm
          ml-0 md:ml-7
          w-full
          justify-center md:justify-start
          flex-wrap
          mt-2.5 md:mt-0
        "
      >
        {/* left pipe – hidden on mobile, visible on desktop */}
        <span className="hidden md:inline font-xl text-xl mr-4">|</span>

        <span className="flex items-center gap-1">
          <span className="w-4 h-4 flex items-center justify-center rounded-full border text-sm">
            C
          </span>
          <span className="text-sm">2025 Sloth Typing</span>
        </span>

        {/* middle pipe – hidden on mobile, visible on desktop */}
        <span className="hidden md:inline font-xl text-xl ml-5">|</span>

        <span className="flex items-center gap-1 text-sm ml-0 md:ml-4 mt-1 md:mt-0">
          Built with <span className="text-[#ff0000]">❤️</span> and "passion"
        </span>

        <div className="flex items-center ml-0 md:ml-auto mt-1 md:mt-0 text-md gap-1.5 text-[#9c9797] hover:text-[#e0dada] cursor-pointer">
          <GitBranch size={16} /> 1.1.1
        </div>
      </div>
    </footer>
  );
}
