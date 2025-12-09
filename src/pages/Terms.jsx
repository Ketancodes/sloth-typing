export default function Terms() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-[#444546] text-white px-6">
      <div className="max-w-3xl w-full  p-8 rounded-2xl ">
        <h1 className="text-3xl font-semibold text-amber-400 mb-4 text-center">
          Terms of Service
        </h1>

        <p className="text-[#d1d1d1] text-sm text-center leading-relaxed">
          By using this typing test, you agree to follow these simple and fair
          terms. Our goal is to provide a smooth, enjoyable, and safe typing
          experience.
        </p>

        <div className="mt-6 text-sm text-[#cfcfcf] space-y-4">
          <div className="bg-[#2d2d2d] p-4 rounded-lg border border-[#555]">
            <h2 className="text-lg font-semibold text-[#f0f0f0] mb-1">
              ✔ Acceptable Use
            </h2>
            <p>
              You agree to use this app responsibly — mainly for practicing
              typing, tracking your stats, and exploring features provided. Any
              misuse, tampering, or attempts to break the app are not allowed.
            </p>
          </div>

          <div className="bg-[#2d2d2d] p-4 rounded-lg border border-[#555]">
            <h2 className="text-lg font-semibold text-[#f0f0f0] mb-1">
              ✔ Accounts & Access
            </h2>
            <p>
              If you create an account, you are responsible for keeping your
              login details secure. We may limit or suspend accounts that
              violate the terms or attempt to abuse the platform.
            </p>
          </div>

          <div className="bg-[#2d2d2d] p-4 rounded-lg border border-[#555]">
            <h2 className="text-lg font-semibold text-[#f0f0f0] mb-1">
              ✔ Data & Privacy
            </h2>
            <p>
              Your data is handled carefully and never sold or misused. You can
              read more about how your information is managed in our Privacy
              Policy.
            </p>
          </div>

          <div className="bg-[#2d2d2d] p-4 rounded-lg border border-[#555]">
            <h2 className="text-lg font-semibold text-[#f0f0f0] mb-1">
              ✔ Changes to the Service
            </h2>
            <p>
              Features may be updated or improved over time. We reserve the
              right to modify or remove features if necessary to ensure
              performance and stability.
            </p>
          </div>

          <div className="bg-[#2d2d2d] p-4 rounded-lg border border-[#555]">
            <h2 className="text-lg font-semibold text-[#f0f0f0] mb-1">
              ✔ Limitation of Liability
            </h2>
            <p>
              This typing test is provided as-is for educational and
              entertainment purposes. We are not responsible for any issues
              caused by misuse, unexpected downtime, or third-party service
              interruptions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
