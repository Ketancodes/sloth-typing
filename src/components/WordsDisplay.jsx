// import { useEffect, useRef, useState } from "react";

// export default function Display({
//   words,
//   currentWordIndex,
//   wordStatus,
//   currentCharIndex,
//   inputValue,
// }) {
//   const containerRef = useRef(null);
//   const activeWordRef = useRef(null);
//   const [visibleStartIndex, setVisibleStartIndex] = useState(0);
//   const [lockedHeight, setLockedHeight] = useState("auto");

//   const typedWords = inputValue.split(" ");
//   const typedCurrentWord =
//     typedWords.length > 0 ? typedWords[typedWords.length - 1] : "";

//   // 🔒 lock container height on mount (prevents layout popping)
//   useEffect(() => {
//     if (containerRef.current) {
//       setLockedHeight(`${containerRef.current.clientHeight}px`);
//     }
//   }, []);

//   // 🔥 dynamic shift when new line detected
//   useEffect(() => {
//     const container = containerRef.current;
//     const active = activeWordRef.current;
//     if (!container || !active) return;

//     const activeTop = Math.round(active.offsetTop);
//     const children = Array.from(container.children);
//     const firstTop = Math.round(children[0]?.offsetTop ?? 0);

//     // detect line change
//     if (activeTop > firstTop + 4) {
//       let firstOnActiveLine = children.find(
//         (c) => Math.abs(Math.round(c.offsetTop) - activeTop) <= 2
//       );
//       if (!firstOnActiveLine) {
//         firstOnActiveLine = children.find(
//           (c) => Math.round(c.offsetTop) >= activeTop
//         );
//       }

//       if (firstOnActiveLine) {
//         const idxAttr = firstOnActiveLine.getAttribute("data-idx");
//         const idx = idxAttr ? Number(idxAttr) : null;
//         if (idx !== null && !Number.isNaN(idx)) {
//           setVisibleStartIndex(idx);
//         } else {
//           setVisibleStartIndex(currentWordIndex);
//         }
//       } else {
//         setVisibleStartIndex(currentWordIndex);
//       }
//     }
//   }, [currentWordIndex, words]);

//   return (
//     <div
//       ref={containerRef}
//       style={{ height: lockedHeight }}
//       className="flex flex-wrap gap-x-4 gap-y-3 w-full text-[2rem] text-[#9e9c9c] leading-[3rem] px-4 py-2 overflow-hidden relative transition-all duration-100"
//     >
//       {words.slice(visibleStartIndex).map((word, idx) => {
//         const absoluteIndex = visibleStartIndex + idx;

//         // Already typed words

//         if (absoluteIndex < currentWordIndex) {
//           const target = words[absoluteIndex];
//           const typed = typedWords[absoluteIndex] ?? "";

//           return (
//             <span
//               key={absoluteIndex}
//               data-idx={absoluteIndex}
//               className="inline-flex whitespace-pre"
//               style={{
//                 // underline only if wrong
//                 boxShadow:
//                   wordStatus[absoluteIndex] === "incorrect"
//                     ? "0 2px 0 #f54f4f"
//                     : "none",
//               }}
//             >
//               {target.split("").map((char, i) => {
//                 let color = "#c0bdbd"; // default gray

//                 if (typed[i] != null) {
//                   color = typed[i] === char ? "#ffffff" : "#f75e5e"; // correct / incorrect
//                 }

//                 return (
//                   <span key={i} style={{ color }}>
//                     {char}
//                   </span>
//                 );
//               })}
//             </span>
//           );
//         }

//         // Current word
//         if (absoluteIndex === currentWordIndex) {
//           const chars = word.split("");
//           return (
//             <span
//               key={absoluteIndex}
//               data-idx={absoluteIndex}
//               ref={activeWordRef}
//               className="relative inline-flex whitespace-pre items-center"
//             >
//               {currentCharIndex === 0 && (
//                 <span className="absolute left-0 top-2 w-[3px] h-[2.4rem] bg-[#f8e218] animate-blink"></span>
//               )}

//               {chars.map((char, i) => {
//                 let charColor = "text-[#9e9c9c]";
//                 if (i < typedCurrentWord.length) {
//                   charColor =
//                     typedCurrentWord[i] === char
//                       ? "text-white"
//                       : "text-[#fa6f6f]";
//                 }

//                 return (
//                   <span key={i} className={`relative ${charColor}`}>
//                     {char}
//                     {currentCharIndex === i + 1 && (
//                       <span className="absolute -right-[1px] top-2 w-[3px] h-[2.4rem] bg-[#f8e328] animate-blink"></span>
//                     )}
//                   </span>
//                 );
//               })}

//               {currentCharIndex === chars.length && (
//                 <span className="absolute -right-[1px] top-2 w-[3px] h-[2.4rem] bg-[#fce732] animate-blink"></span>
//               )}
//             </span>
//           );
//         }

//         // Future words
//         return (
//           <span
//             key={absoluteIndex}
//             data-idx={absoluteIndex}
//             className="inline-flex whitespace-pre text-[#9e9c9c]"
//           >
//             {word}
//           </span>
//         );
//       })}
//     </div>
//   );
// }

// import { useEffect, useRef, useState } from "react";

// export default function Display({
//   words,
//   currentWordIndex,
//   wordStatus,
//   currentCharIndex,
//   inputValue,
// }) {
//   const containerRef = useRef(null);
//   const activeWordRef = useRef(null);
//   const [visibleStartIndex, setVisibleStartIndex] = useState(0);
//   const [lockedHeight, setLockedHeight] = useState("auto");

//   const typedWords = inputValue.split(" ");
//   const typedCurrentWord =
//     typedWords.length > 0 ? typedWords[typedWords.length - 1] : "";

//   // 🔒 lock container height on mount
//   useEffect(() => {
//     if (containerRef.current) {
//       setLockedHeight(`${containerRef.current.clientHeight}px`);
//     }
//   }, []);

//   // 🔥 dynamic shift when new line detected (your original code)
//   useEffect(() => {
//     const container = containerRef.current;
//     const active = activeWordRef.current;
//     if (!container || !active) return;

//     const activeTop = Math.round(active.offsetTop);
//     const children = Array.from(container.children);
//     const firstTop = Math.round(children[0]?.offsetTop ?? 0);

//     if (activeTop > firstTop + 4) {
//       let firstOnActiveLine = children.find(
//         (c) => Math.abs(Math.round(c.offsetTop) - activeTop) <= 2
//       );
//       if (!firstOnActiveLine) {
//         firstOnActiveLine = children.find(
//           (c) => Math.round(c.offsetTop) >= activeTop
//         );
//       }

//       if (firstOnActiveLine) {
//         const idxAttr = firstOnActiveLine.getAttribute("data-idx");
//         const idx = idxAttr ? Number(idxAttr) : null;
//         if (idx !== null && !Number.isNaN(idx)) {
//           setVisibleStartIndex(idx);
//         } else {
//           setVisibleStartIndex(currentWordIndex);
//         }
//       } else {
//         setVisibleStartIndex(currentWordIndex);
//       }
//     }
//   }, [currentWordIndex, words]);

//   // 🆕 NEW: smooth horizontal focus on current word (does NOT break logic)
//   useEffect(() => {
//     const container = containerRef.current;
//     const active = activeWordRef.current;
//     if (!container || !active) return;

//     const activeLeft = active.offsetLeft;
//     const containerWidth = container.clientWidth;

//     const targetScroll = activeLeft - containerWidth * 0.28;

//     container.scrollTo({
//       left: targetScroll,
//       behavior: "smooth",
//     });
//   }, [currentWordIndex]);

//   return (
//     <div
//       ref={containerRef}
//       style={{ height: lockedHeight, overflow: "hidden" }}
//       className="
//         flex flex-wrap gap-x-4 gap-y-3 w-full
//         text-[1.35rem] leading-[2.1rem]
//         sm:text-[1.6rem] sm:leading-[2.4rem]
//         md:text-[2rem] md:leading-[3rem]
//         text-[#9e9c9c] px-4 py-2
//         overflow-hidden relative transition-all duration-100
//       "
//     >
//       {words.slice(visibleStartIndex).map((word, idx) => {
//         const absoluteIndex = visibleStartIndex + idx;

//         // Already typed words (unchanged)
//         if (absoluteIndex < currentWordIndex) {
//           const target = words[absoluteIndex];
//           const typed = typedWords[absoluteIndex] ?? "";
//           return (
//             <span
//               key={absoluteIndex}
//               data-idx={absoluteIndex}
//               className="inline-flex whitespace-pre"
//               style={{
//                 boxShadow:
//                   wordStatus[absoluteIndex] === "incorrect"
//                     ? "0 2px 0 #f54f4f"
//                     : "none",
//               }}
//             >
//               {target.split("").map((char, i) => {
//                 let color = "#c0bdbd";
//                 if (typed[i] != null) {
//                   color = typed[i] === char ? "#ffffff" : "#f75e5e";
//                 }
//                 return (
//                   <span key={i} style={{ color }}>
//                     {char}
//                   </span>
//                 );
//               })}
//             </span>
//           );
//         }

//         // Current word (unchanged)
//         if (absoluteIndex === currentWordIndex) {
//           const chars = word.split("");
//           return (
//             <span
//               key={absoluteIndex}
//               data-idx={absoluteIndex}
//               ref={activeWordRef}
//               className="relative inline-flex whitespace-pre items-center"
//             >
//               {currentCharIndex === 0 && (
//                 <span className="absolute left-0 top-2 w-[3px] h-[2.4rem] bg-[#f8e218] animate-blink"></span>
//               )}

//               {chars.map((char, i) => {
//                 let charColor = "text-[#9e9c9c]";
//                 if (i < typedCurrentWord.length) {
//                   charColor =
//                     typedCurrentWord[i] === char
//                       ? "text-white"
//                       : "text-[#fa6f6f]";
//                 }

//                 return (
//                   <span key={i} className={`relative ${charColor}`}>
//                     {char}
//                     {currentCharIndex === i + 1 && (
//                       <span className="absolute -right-[1px] top-2 w-[3px] h-[2.4rem] bg-[#f8e328] animate-blink"></span>
//                     )}
//                   </span>
//                 );
//               })}

//               {currentCharIndex === chars.length && (
//                 <span className="absolute -right-[1px] top-2 w-[3px] h-[2.4rem] bg-[#fce732] animate-blink"></span>
//               )}
//             </span>
//           );
//         }

//         // Future words (unchanged)
//         return (
//           <span
//             key={absoluteIndex}
//             data-idx={absoluteIndex}
//             className="inline-flex whitespace-pre text-[#9e9c9c]"
//           >
//             {word}
//           </span>
//         );
//       })}
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react";

export default function Display({
  words,
  currentWordIndex,
  wordStatus,
  currentCharIndex,
  inputValue,
}) {
  const containerRef = useRef(null);
  const activeWordRef = useRef(null);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // new

  const typedWords = inputValue.split(" ");
  const typedCurrentWord =
    typedWords.length > 0 ? typedWords[typedWords.length - 1] : "";

  // 🔥 dynamic shift when new line detected (same)
  useEffect(() => {
    const container = containerRef.current;
    const active = activeWordRef.current;
    if (!container || !active) return;

    const activeTop = Math.round(active.offsetTop);
    const children = Array.from(container.children);
    const firstTop = Math.round(children[0]?.offsetTop ?? 0);

    if (activeTop > firstTop + 4) {
      let firstOnActiveLine = children.find(
        (c) => Math.abs(Math.round(c.offsetTop) - activeTop) <= 2
      );
      if (!firstOnActiveLine) {
        firstOnActiveLine = children.find(
          (c) => Math.round(c.offsetTop) >= activeTop
        );
      }

      if (firstOnActiveLine) {
        const idxAttr = firstOnActiveLine.getAttribute("data-idx");
        const idx = idxAttr ? Number(idxAttr) : null;
        if (idx !== null && !Number.isNaN(idx)) {
          setVisibleStartIndex(idx);
        } else {
          setVisibleStartIndex(currentWordIndex);
        }
      } else {
        setVisibleStartIndex(currentWordIndex);
      }
    }
  }, [currentWordIndex, words]);

  // 🆕 smooth horizontal scroll (same)
  useEffect(() => {
    const container = containerRef.current;
    const active = activeWordRef.current;
    if (!container || !active) return;

    const activeLeft = active.offsetLeft;
    const containerWidth = container.clientWidth;

    const targetScroll = activeLeft - containerWidth * 0.28;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  }, [currentWordIndex]);

  useEffect(() => {
    //new
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        maxHeight:
          windowWidth < 640
            ? "4.6rem"
            : window.innerWidth < 768
            ? "6.6rem"
            : "7.2rem",
        overflow: "hidden",
      }}
      className="
        flex flex-wrap gap-x-4 gap-y-3 w-full 
        text-[1.35rem] leading-[1.8rem] 
        sm:text-[1.6rem] sm:leading-[2.4rem] 
        md:text-[2rem] md:leading-[3rem] 
        text-[#9e9c9c] px-4 py-2 
        relative transition-all duration-100
      "
    >
      {words.slice(visibleStartIndex).map((word, idx) => {
        const absoluteIndex = visibleStartIndex + idx;

        // Already typed words
        if (absoluteIndex < currentWordIndex) {
          const target = words[absoluteIndex];
          const typed = typedWords[absoluteIndex] ?? "";
          return (
            <span
              key={absoluteIndex}
              data-idx={absoluteIndex}
              className="inline-flex whitespace-pre"
              style={{
                boxShadow:
                  wordStatus[absoluteIndex] === "incorrect"
                    ? "0 2px 0 #f54f4f"
                    : "none",
              }}
            >
              {target.split("").map((char, i) => {
                let color = "#c0bdbd";
                if (typed[i] != null) {
                  color = typed[i] === char ? "#ffffff" : "#f75e5e";
                }
                return (
                  <span key={i} style={{ color }}>
                    {char}
                  </span>
                );
              })}
            </span>
          );
        }

        // Current word
        if (absoluteIndex === currentWordIndex) {
          const chars = word.split("");
          return (
            <span
              key={absoluteIndex}
              data-idx={absoluteIndex}
              ref={activeWordRef}
              className="relative inline-flex whitespace-pre items-center"
            >
              {currentCharIndex === 0 && (
                <span
                  className=" absolute left-0 top-2 
                    w-[2px] sm:w-[2.5px] md:w-[3px] 
                      h-[1.6rem] sm:h-[2rem] md:h-[2.4rem] 
                    bg-[#f8e218] animate-blink  "
                ></span>
              )}

              {chars.map((char, i) => {
                let charColor = "text-[#9e9c9c]";
                if (i < typedCurrentWord.length) {
                  charColor =
                    typedCurrentWord[i] === char
                      ? "text-white"
                      : "text-[#fa6f6f]";
                }

                return (
                  <span key={i} className={`relative ${charColor}`}>
                    {char}
                    {currentCharIndex === i + 1 && (
                      <span
                        className=" absolute -right-[1px] top-2 
                                        w-[2px] sm:w-[2.5px] md:w-[3px] 
                                       h-[1.6rem] sm:h-[2rem] md:h-[2.4rem] 
                                      bg-[#f8e328] animate-blink"
                      ></span>
                    )}
                  </span>
                );
              })}

              {currentCharIndex === chars.length && (
                <span
                  className="  absolute -right-[1px] top-2
      w-[2px] sm:w-[2.5px] md:w-[3px]
      h-[1.6rem] sm:h-[2rem] md:h-[2.4rem]
      bg-[#fce732] animate-blink"
                ></span>
              )}
            </span>
          );
        }

        // Future words
        return (
          <span
            key={absoluteIndex}
            data-idx={absoluteIndex}
            className="inline-flex whitespace-pre text-[#9e9c9c]"
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}
