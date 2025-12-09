export default function Privacy() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-[#444546] text-white px-6">
      <div className="max-w-3xl w-full  p-8 rounded-2xl ">
        <h1 className="text-3xl font-semibold text-amber-400 mb-4 text-center">
          Privacy Policy
        </h1>

        <p className="text-[#d1d1d1] text-sm leading-relaxed text-center">
          Your privacy matters. This typing test collects only the information
          necessary to create your account and track your progress. We respect
          your data and never sell, share, or misuse it.
        </p>

        <div className="mt-6 space-y-4 text-sm text-[#c3c3c3]">
          <div className="bg-[#2d2d2d] p-4 rounded-lg border border-[#505050]">
            <h2 className="text-lg font-semibold text-[#f0f0f0] mb-1">
              👤 Information We Collect
            </h2>
            <p>
              When using this app, basic details such as your email and username
              may be collected to personalize your experience. Typing
              performance data (WPM, accuracy, test results) may also be saved
              to help you track improvement.
            </p>
          </div>

          <div className="bg-[#2d2d2d] p-4 rounded-lg border border-[#505050]">
            <h2 className="text-lg font-semibold text-[#f0f0f0] mb-1">
              📘 How Your Data Is Used
            </h2>
            <p>
              Your data is used only to maintain your account, show your
              statistics, and improve the overall typing experience. We do not
              use your data for advertising or third-party tracking.
            </p>
          </div>

          <div className="bg-[#2d2d2d] p-4 rounded-lg border border-[#505050]">
            <h2 className="text-lg font-semibold text-[#f0f0f0] mb-1">
              🚫 What We Don’t Collect
            </h2>
            <p>
              We do not collect financial information, sensitive personal data,
              or anything unrelated to your typing performance.
            </p>
          </div>

          <div className="bg-[#2d2d2d] p-4 rounded-lg border border-[#505050]">
            <h2 className="text-lg font-semibold text-[#f0f0f0] mb-1">
              🗑️ Your Control
            </h2>
            <p>
              You can request to delete your account or data at any time. Your
              information is always yours, and we respect your choices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
