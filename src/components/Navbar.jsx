// import Typingtext from "./Typingtext";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import Contact from "../pages/Contact";
// import { useNavigate } from "react-router-dom";

// const hoverUnderline =
//   "  relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-[#dfd332] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-out hover:text-[#d6cfcf] hover:after:scale-x-100";

// export default function Navbar() {
//   const [isContactOpen, setIsContactOpen] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <>
//       <nav className="h-20 w-full bg-[#3e3f3f] flex items-center px-2 ">
//         {/* sloth logo */}
//         <div className=" ">
//           <img
//             src="\Your_paragraph_text__1_-removebg-preview.png"
//             alt="logo"
//             onClick={() => navigate("/")}
//             className="h-28 w-auto object-contain  brightness-125 cursor-pointer"
//           />
//         </div>
//         {/* typing text animation */}
//         <Typingtext />
//         {/* navigational links */}
//         <div className="flex items-center ml-auto mr-4 gap-16 text-[#afacac] font-medium font-['Roboto_Mono'] ">
//           <NavLink
//             to="/settings"
//             className={({ isActive }) =>
//               isActive ? " text-[#f5d939]" : hoverUnderline
//             }
//           >
//             Settings
//           </NavLink>

//           <button
//             onClick={() => setIsContactOpen(true)}
//             className={`${hoverUnderline} cursor-pointer active:text-[#f5d939]`}
//           >
//             Contact
//           </button>
//           <Contact
//             isOpen={isContactOpen}
//             onClose={() => setIsContactOpen(false)}
//           />
//           {/* {isContactOpen && (
//             <div className="absolute top-20 right-10 bg-gray-700 text-white p-4 rounded-lg shadow-lg z-50">
//               <Contact />
//             </div>
//           )} */}

//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive ? " text-[#f5d939]" : hoverUnderline
//             }
//           >
//             About
//           </NavLink>

//           <NavLink to="/account">
//             <button className="bg-[#f7e7d6]   rounded-3xl px-2.5 py-2 text-[#000000]  shadow-[0_4px_0_#b09f8c] hover:translate-y-[-2px] transition-all duration-200 hover:bg-[#fae2c4] cursor-pointer ">
//               Sign up
//             </button>
//           </NavLink>
//         </div>
//       </nav>
//     </>
//   );
// }

import Typingtext from "./Typingtext";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Contact from "../pages/Contact";
import { useNavigate } from "react-router-dom";
import { Settings, Mail, Info } from "lucide-react"; // ICONS

const hoverUnderline =
  "relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-[#dfd332] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-out hover:text-[#d6cfcf] hover:after:scale-x-100";

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="h-20 w-full bg-[#3e3f3f] flex items-center px-2">
        {/* logo */}
        <div>
          <img
            src="\Your_paragraph_text__1_-removebg-preview.png"
            alt="logo"
            onClick={() => navigate("/")}
            className="h-28 w-auto object-contain brightness-125 cursor-pointer max-sm:-ml-4"
          />
        </div>

        {/* typing animation — hidden on mobile */}
        <div className="hidden md:block">
          <Typingtext />
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center ml-auto mr-4 gap-16 text-[#afacac] font-medium font-['Roboto_Mono']">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "text-[#f5d939]" : hoverUnderline
            }
          >
            Settings
          </NavLink>

          <button
            onClick={() => setIsContactOpen(true)}
            className={`${hoverUnderline} cursor-pointer active:text-[#f5d939]`}
          >
            Contact
          </button>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#f5d939]" : hoverUnderline
            }
          >
            About
          </NavLink>

          <NavLink to="/account">
            <button className="bg-[#f7e7d6] rounded-3xl px-2.5 py-2 text-[#000000] shadow-[0_4px_0_#b09f8c] hover:translate-y-[-2px] transition-all duration-200 hover:bg-[#fae2c4] cursor-pointer">
              Sign up
            </button>
          </NavLink>
        </div>

        {/* MOBILE NAV ICONS */}
        <div className="flex md:hidden items-center ml-auto gap-4 pr-2 text-[#d4d4d4]">
          {/* Settings */}
          <NavLink to="/settings" title="Settings">
            <Settings className="w-6 h-6 hover:text-[#f5d939] transition" />
          </NavLink>

          {/* Contact */}
          <button onClick={() => setIsContactOpen(true)} title="Contact">
            <Mail className="w-6 h-6 hover:text-[#f5d939] transition" />
          </button>

          {/* About */}
          <NavLink to="/about" title="About">
            <Info className="w-6 h-6 hover:text-[#f5d939] transition" />
          </NavLink>

          {/* Sign up pill — smaller */}
          <NavLink to="/account">
            <button className="bg-[#f7e7d6] text-black px-2 py-1 rounded-2xl text-sm shadow-[0_3px_0_#b09f8c] hover:translate-y-[-2px] transition-all hover:bg-[#fae2c4] cursor-pointer">
              Sign up
            </button>
          </NavLink>
        </div>
      </nav>

      {/* MODAL */}
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
