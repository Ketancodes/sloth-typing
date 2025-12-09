import { useState, useEffect } from "react";

export default function Typingtext() {
  const staticText = "Sloth ";
  const dynamicText = "typing...!";

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  // 🔥 added state to handle pauses (after full text & after delete)
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return; // 🔥 stop typing when paused

    // 🔥 changed speeds to feel more natural
    const typingSpeed = isDeleting ? 120 : 250;

    const handleTyping = () => {
      // ✅ original: typing forward
      if (!isDeleting && index < dynamicText.length) {
        setDisplayText(dynamicText.substring(0, index + 1));
        setIndex((prev) => prev + 1);

        // ✅ original: deleting backward
      } else if (isDeleting && index > 0) {
        setDisplayText(dynamicText.substring(0, index - 1));
        setIndex((prev) => prev - 1);

        // 🔥 added: pause after finishing typing before deleting
      } else if (!isDeleting && index === dynamicText.length) {
        setPause(true);
        setTimeout(() => {
          setIsDeleting(true);
          setPause(false);
        }, 1000); // pause 1s after full text

        // 🔥 added: pause after deleting everything before typing again
      } else if (isDeleting && index === 0) {
        setPause(true);
        setTimeout(() => {
          setIsDeleting(false);
          setPause(false);
        }, 600); // pause 0.6s before retyping
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [index, isDeleting, dynamicText, pause]);

  return (
    <>
      <div className="text-cente mt-6">
        <h2 className="text-2xl font-medium  font-[Courier_Prime] tracking-tight  text-gray-300 inline-block">
          {staticText}
          <span className="text-yellow-400">{displayText}</span>
          {/* ✅ blinking cursor stays same */}
          <span className="animate-pulse">|</span>
        </h2>
        <p
          className="text-[12px] text-gray-400 mb-1 font-[Courier_Prime]"
          style={{ marginLeft: `${staticText.length + dynamicText.length}ch` }}
        >
          one keystroke closer to mastery..!
        </p>
      </div>
    </>
  );
}
