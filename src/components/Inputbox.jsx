// import React, { forwardRef } from "react";

// const Inputbox = forwardRef(
//   (
//     { value, onChange, placeholder, currentCharIndex, disable, ...props },
//     ref
//   ) => {
//     return (
//       <input
//         {...props}
//         ref={ref}
//         type="text"
//         disabled={disable}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className="flex-1 h-[60px] mt-14 px-4 py-2 text-xl rounded-xl bg-[#393b3b] text-[#f5f5f5] border border-[#5a5959] outline-none focus:ring-1 focus:ring-[#dbd9d9] transition"
//         onKeyDown={(e) => {
//           if (e.key === " " && currentCharIndex === 0) {
//             e.preventDefault();
//           }
//         }}
//       />
//     );
//   }
// );

// export default Inputbox;

import React, { forwardRef } from "react";

const Inputbox = forwardRef(
  (
    { value, onChange, placeholder, currentCharIndex, disable, ...props },
    ref
  ) => {
    return (
      <input
        {...props}
        ref={ref}
        type="text"
        disabled={disable}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          flex-grow min-w-0
          mt-14

          h-[48px] sm:h-[52px] md:h-[60px]
          w-[75%] sm:w-[60%] md:w-auto

          px-3 sm:px-4 
          text-base sm:text-lg md:text-xl

          rounded-xl bg-[#393b3b] text-[#f5f5f5] 
          border border-[#5a5959] outline-none 
          focus:ring-1 focus:ring-[#dbd9d9] 
          transition
          
          mx-auto md:mx-0
        "
        onKeyDown={(e) => {
          if (e.key === " " && currentCharIndex === 0) {
            e.preventDefault();
          }
        }}
      />
    );
  }
);

export default Inputbox;
