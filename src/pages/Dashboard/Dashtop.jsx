export default function Dashtop({ wpm = 0, accuracy = 0 }) {
  return (
    <>
      <div className="grid grid-cols-2   gap-10 mt-2 ml-8  text-white  max-sm:gap-10 max-sm:ml-0 sm:ml-4 ">
        {/* WPM Section */}
        <div className="flex flex-col items-start">
          <p className="text-3xl font-normal text-[#8d8b8b] -tracking-normal">
            wpm{" "}
          </p>
          <h1 className="text-7xl font-semibold text-[#f8b809] leading-tight font-mono">
            {wpm}
          </h1>
        </div>

        {/* Accuracy Section */}
        <div className="flex flex-col items-start">
          <p className="text-3xl font-normal text-[#8d8b8b]  -tracking-normal">
            accuracy
          </p>
          <h1 className="text-7xl font-semibold text-[#f8b809] leading-tight font-mono">
            {accuracy}%
          </h1>
        </div>
      </div>
    </>
  );
}
