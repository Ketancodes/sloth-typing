import { Bug, MessagesSquare, HandHelping } from "lucide-react";

import { useEffect } from "react";

export default function Contact({ isOpen, onClose }) {
  // Close on ESC

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);
  if (!isOpen) return null;

  const email = "kudtalkar@gmail.com"; // your email

  return (
    <>
      {/* Background blur */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
        onClick={onClose}
      ></div>

      {/* Contact Popup */}
      <div
        className="
        fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[100%] max-w-[640px] bg-[#3b3c3d] text-white rounded-xl 
        border border-[#5a5959] p-4 shadow-xl animate-fadeIn
      "
      >
        <h2 className="text-2xl text-[#918e8e] font-medium mb-2 ">Contact</h2>

        <p className="text-[#d1d1d1] mb-5 font-medium">
          U can freely contact us regarding any questions or feedback ,or u can
          send email here kud*** @gmail.com 😎
        </p>
        <p className="text-[#d1d1d1] font-medium">
          choose an option below to reach out (default mail will open..){" "}
        </p>

        {/* Buttons List */}
        {/* Buttons (Monkeytype Style Grid) */}
        <div className="grid grid-cols-2 gap-4 mt-4 ">
          {/* Help Center */}
          <a
            href={`mailto:${email}?subject=Help%20Request`}
            className="
      flex items-center gap-4 max-sm:gap-2 px-4 py-4 max-sm:px-2 max-sm:py-2 rounded-lg
     bg-[#f7e7d6] hover:bg-[#f7dab7] text-[#000000]
      border border-[#555] transition cursor-pointer
    "
          >
            <span className="text-2xl max-sm:text-xl">
              <HandHelping size={26} />
            </span>
            <span className="text-lg font-medium max-sm:text-sm  ">
              Help Center
            </span>
          </a>

          {/* Feedback */}
          <a
            href={`mailto:${email}?subject=Feedback%20for%20SlothTyping`}
            className="
      flex items-center gap-4 px-4 py-4 rounded-lg
      bg-[#f7e7d6] hover:bg-[#f7dab7] text-[#000000]
      border border-[#555] transition cursor-pointer
    "
          >
            <span className="text-2xl max-sm:text-xl">
              <MessagesSquare size={26} />
            </span>
            <span className="text-lg font-medium max-sm:text-sm">Feedback</span>
          </a>

          {/* Bug Report — centered on 2nd row */}
          <a
            href={`mailto:${email}?subject=Bug%20Report`}
            className="
      flex items-center justify-center gap-4 max-sm:gap-2  px-4 py-4 max-sm:px-2 max-sm:py-2 rounded-lg
      bg-[#f7e7d6] hover:bg-[#f7dab7] text-[#000000]  transition
      border border-[#555]  cursor-pointer
      col-span-2 w-[70%] mx-auto
    "
          >
            <span className="text-2xl max-sm:text-xl">
              <Bug size={25} />
            </span>
            <span className="text-lg font-medium max-sm:text-sm">
              Bug Report
            </span>
          </a>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl text-gray-300 hover:text-white cursor-pointer"
        >
          ✕
        </button>
      </div>
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.15s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
