import { useState, useEffect, useRef } from "react";

export default function Time({ isTyping, duration = 30, onTimeUp }) {
  const [time, setTime] = useState(duration);
  const intervalRef = useRef(null);
  const onTimeUpRef = useRef(onTimeUp);

  // keep latest onTimeUp function
  useEffect(() => {
    onTimeUpRef.current = onTimeUp;
  }, [onTimeUp]);

  // Handle timer logic
  useEffect(() => {
    if (isTyping) {
      setTime(duration);

      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            onTimeUpRef.current?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isTyping, duration]); // ✅ removed direct onTimeUp

  if (!isTyping) return null;

  return <div className="text-3xl font-normal text-[#eecb06]">{time}</div>;
}
