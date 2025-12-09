import { useNavigate } from "react-router-dom";

import { useState, useEffect, useRef } from "react";
import { Globe, RotateCcw } from "lucide-react";
import { words as allwords } from "../words";
import WordsDisplay from "./WordsDisplay";
import Inputbox from "./Inputbox";
import Timer from "./Timer";

function shuffleArray(array) {
  let a = array.slice(); // create copy to avoid mutating original
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [a[i], a[j]] = [a[j], a[i]]; // swap elements at positions i and j
  }
  return a;
}

export default function Mainbody() {
  const [testWords, setTestWords] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wordStatus, setWordStatus] = useState([]);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTypingStarted, setIsTypingStarted] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  // ---- Consistency Tracking ----
  const [wpmHistory, setWpmHistory] = useState([]);
  const [errorHistory, setErrorHistory] = useState([]);
  const charsThisSecond = useRef(0);
  const errorsThisSecond = useRef(0);

  const totalKeystrokes = useRef(0);

  const rawCharsThisSecond = useRef(0);
  const keystrokesThisSecond = useRef(0);
  const hadErrorThisSecond = useRef(false);

  const navigate = useNavigate();
  const perWordErrors = useRef({});
  const perWordTyped = useRef({});
  const inputRef = useRef(null);

  const ensureWords = (currentIdx) => {
    if (testWords.length - currentIdx < 30) {
      const wordsPerLine = 15;
      const chunkSize = wordsPerLine * 3;
      setTestWords((prev) => [...prev, ...genrateRandomWords(chunkSize)]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (!isTypingStarted) setIsTypingStarted(true);
    const typedWords = value.split(" ");
    // Count keystrokes for consistency (Monkeytype)
    totalKeystrokes.current++;
    charsThisSecond.current++;
    rawCharsThisSecond.current++;
    keystrokesThisSecond.current++;
    const endsWithSpace = value.endsWith(" ");
    const currentIdx = typedWords.length - 1;

    const currentTyped = endsWithSpace ? "" : typedWords[currentIdx] || "";
    const target = testWords[currentIdx] || "";

    // Previous typed state of this word
    const prevTyped = perWordTyped.current[currentIdx] || "";

    // -------------------------------------------------------
    // 🚫 Prevent skipping (block space if no word typed)
    // -------------------------------------------------------
    // Prevent multiple spaces only when user has NOT typed the current word
    // Block skipping only when user is on a NEW word and presses space again
    if (endsWithSpace) {
      const previousTyped = typedWords[currentIdx - 1] || "";

      if (previousTyped.trim() === "") {
        // user pressed space without typing previous word
        setInputValue((prev) => prev.trimEnd() + " ");
        return;
      }
    }

    // -------------------------------------------------------
    // 🟡 Monkeytype error model
    // -------------------------------------------------------
    if (currentTyped.length > prevTyped.length) {
      // NEW CHARACTER TYPED
      const pos = currentTyped.length - 1;
      const typedChar = currentTyped[pos];
      const targetChar = target[pos];

      // wrong char
      if (typedChar !== targetChar) {
        perWordErrors.current[currentIdx] =
          (perWordErrors.current[currentIdx] || 0) + 1;
        errorsThisSecond.current++;
        hadErrorThisSecond.current = true;
      }

      // extra char (typed beyond target length)
      if (currentTyped.length > target.length) {
        perWordErrors.current[currentIdx] =
          (perWordErrors.current[currentIdx] || 0) + 1;
        errorsThisSecond.current++;
        hadErrorThisSecond.current = true;
      }
    } else if (currentTyped.length < prevTyped.length) {
      // BACKSPACE
      const removedIndex = currentTyped.length;
      const removedChar = prevTyped[removedIndex];
      const targetChar = target[removedIndex];

      // Backspacing wrong char → penalty
      if (removedChar !== targetChar) {
        perWordErrors.current[currentIdx] =
          (perWordErrors.current[currentIdx] || 0) + 1;
        errorsThisSecond.current++;
        hadErrorThisSecond.current = true;
      }

      // Backspacing extra char → penalty
      if (prevTyped.length > target.length) {
        perWordErrors.current[currentIdx] =
          (perWordErrors.current[currentIdx] || 0) + 1;
        errorsThisSecond.current++;
        hadErrorThisSecond.current = true;
      }
    }

    // update stored typing
    perWordTyped.current[currentIdx] = currentTyped;

    // -------------------------------------------------------
    // NORMAL UI LOGIC
    // -------------------------------------------------------
    setInputValue(value);
    setCurrentWordIndex(currentIdx);
    setCurrentCharIndex(currentTyped.length);

    // only update wordStatus when space pressed
    if (endsWithSpace) {
      const lastWord = typedWords[currentIdx - 1] || "";
      const targetLast = testWords[currentIdx - 1] || "";
      const isCorrect = lastWord === targetLast;

      if (!isCorrect) {
        perWordErrors.current[currentIdx - 1] =
          (perWordErrors.current[currentIdx - 1] || 0) + 1;
        errorsThisSecond.current++;
        hadErrorThisSecond.current = true;
      }

      setWordStatus((prev) => {
        const newStatus = [...prev];
        newStatus[currentIdx - 1] = isCorrect ? "correct" : "incorrect";
        return newStatus;
      });
    }

    ensureWords(currentIdx);
  };

  const genrateRandomWords = (count = 50) => {
    let shuffled = shuffleArray(allwords);
    return shuffled.slice(0, count);
  };
  useEffect(() => {
    setTestWords(genrateRandomWords());
    perWordErrors.current = {};
    perWordTyped.current = {};
  }, []);
  const handleStart = () => {
    setTestWords(genrateRandomWords());

    perWordErrors.current = {};
    perWordTyped.current = {};

    setInputValue(""); // <-- clear input fully here (not a space)
    setCurrentWordIndex(0); // <-- reset current word index
    setWordStatus([]); // <-- reset word status array

    setCurrentCharIndex(0);
    setIsTypingStarted(false); // reset the timing on restart
    setTimeUp(false);
  };
  // ---- Per-second WPM tracker (Monkeytype consistency) ----
  useEffect(() => {
    if (!isTypingStarted) return;

    const interval = setInterval(() => {
      const chars = charsThisSecond.current;
      const rawChars = rawCharsThisSecond.current;

      const wpm = (chars / 5) * 60; // convert chars/sec → WPM

      if (chars > 0 || rawChars > 0) {
        setWpmHistory((prev) => [...prev, wpm]);

        setErrorHistory((prev) => [
          ...prev,
          hadErrorThisSecond.current ? 1 : 0,
        ]);
      }

      hadErrorThisSecond.current = false;
      errorsThisSecond.current = 0;

      charsThisSecond.current = 0;
      rawCharsThisSecond.current = 0;
    }, 1000);

    return () => clearInterval(interval);
  }, [isTypingStarted]);

  // for dashborad autofocus input
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // for mainbody auotfocus input
  useEffect(() => {
    if (!isTypingStarted && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isTypingStarted]);

  function getStdDev(values) {
    if (!values.length) return { avg: 0, sd: 0 };

    const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
    const variance =
      values.reduce((sum, v) => sum + Math.pow(v - avg, 2), 0) / values.length;

    return { avg, sd: Math.sqrt(variance) };
  }

  // ✅ callback for when timer hits 0

  const handleTimeUp = () => {
    setTimeUp(true);

    const timeSeconds = 30;
    const minutes = timeSeconds / 60;

    const typedString = inputValue.trim();
    let typedWords = typedString ? typedString.split(/\s+/) : [];
    if (inputValue[inputValue.length - 1] !== " ") {
      typedWords = typedWords.slice(0, -1);
      delete perWordErrors.current[typedWords.length];
    }

    // ---- Monkeytype Counters ----
    let totalCorrectChars = 0;
    let totalErrors = 0;
    let extraChars = 0;
    let missedChars = 0;
    let totalTypedChars = 0;

    let correctWordsCount = 0;
    let incorrectWordsCount = 0;

    for (let idx = 0; idx < typedWords.length; idx++) {
      const typed = typedWords[idx];
      const target = testWords[idx] || "";

      // count typed chars
      totalTypedChars += typed.length;

      // compare char by char (only typed chars)
      for (let i = 0; i < typed.length; i++) {
        if (typed[i] === target[i]) {
          totalCorrectChars++;
        }
      }

      // extra chars (typed > target)
      if (typed.length > target.length) {
        const extra = typed.length - target.length;
        extraChars += extra;
        totalErrors += extra;
      }

      // missed chars (typed < target)
      if (typed.length < target.length) {
        const missed = target.length - typed.length;
        missedChars += missed;
        totalErrors += missed;
      }

      // word correctness
      if (typed === target) correctWordsCount++;
      else incorrectWordsCount++;

      // ---- Count space like Monkeytype ----
      if (idx < typedWords.length - 1) {
        totalTypedChars++; // typed a space

        if (typed === target) {
          totalCorrectChars++; // correct space
        } else {
          totalErrors++; // wrong space (word incorrect)
        }
      }
    }

    // ---- Add backspace mistakes (Monkeytype penalties) ----
    const backspaceErrors = Object.values(perWordErrors.current).reduce(
      (sum, x) => sum + x,
      0
    );

    totalErrors += backspaceErrors;

    // ---- Final accuracy ----
    const accuracy =
      totalCorrectChars + totalErrors > 0
        ? (totalCorrectChars / (totalCorrectChars + totalErrors)) * 100
        : 0;

    // ---- WPM ----
    const rawWPM = totalKeystrokes.current / 5 / minutes;
    const netWPM = totalCorrectChars / 5 / minutes;
    const { avg, sd } = getStdDev(wpmHistory);
    let consistency = avg > 0 ? (1 - sd / avg) * 100 : 0;

    const stats = {
      rawWPM: rawWPM.toFixed(2),
      netWPM: netWPM.toFixed(2),
      accuracy: accuracy.toFixed(2),
      consistency: consistency.toFixed(2),
      wpmHistory,
      errorHistory,

      correctWords: correctWordsCount,
      incorrectWords: incorrectWordsCount,

      correctChars: totalCorrectChars,
      incorrectChars: totalErrors,
      extraChars,
      missedChars,
      totalTyped: totalTypedChars,
    };

    navigate("/dashboard", { state: stats });
  };

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <div className="w-[90%] flex items-center justify-center px-4 relative">
          <div className=" absolute left-[-15px] top-0 ">
            {/* ✅ timing logic */}
            {isTypingStarted && !timeUp ? (
              <Timer
                isTyping={isTypingStarted}
                duration={30}
                onTimeUp={handleTimeUp}
                // restartKey={restartKey}
              />
            ) : (
              ""
            )}
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2">
            <span className="text-[#b3aeae]">
              <Globe size={18} />
            </span>
            <span className="text-md text-[#9c9797] font-medium">english</span>
          </div>
        </div>

        {/* Typing Box */}

        <div className="w-[100%] h-[116px] max-w-[1300px]   mt-10 flex justify-center       overflow-hidden">
          <WordsDisplay
            words={testWords}
            currentCharIndex={currentCharIndex}
            currentWordIndex={currentWordIndex}
            wordStatus={wordStatus}
            inputValue={inputValue}
          />
        </div>

        {/* input box */}

        <div
          className=" flex items-center  gap-2 sm:gap-3 md:gap-10 
  w-full 
  mx-auto 
  mt-8
  md:w-[45%]"
        >
          <Inputbox
            id="typing-input"
            type="text"
            ref={inputRef}
            value={inputValue}
            onChange={handleInputChange}
            currentCharIndex={currentCharIndex}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            name="typing-input"
            placeholder="type here..."
            disable={timeUp} // ✅ disable input when time is up
            className=" flex-1 h-[60px] mt-8 px-4 py-2 text-xl rounded-xl bg-[#393b3b] text-[#f5f5f5] border border-[#5a5959] outline-none focus:ring-1 focus:ring-[#dad7d7] transition"
          />
          <div className="relative flex group mt-11 shrink-0">
            <button
              onClick={handleStart}
              className="  text-[#9c9797] hover:text-[#d3cdcd] cursor-pointer"
            >
              <RotateCcw size={25} />
            </button>
            <div
              className="absolute left-1/2 -translate-x-1/2 top-full mt-2 ml-3 px-2 py-1 text-sm rounded-md bg-[#1c1d1d] text-[#fffefe] shadow-md 
                  opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 whitespace-nowrap"
            >
              restart test
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
