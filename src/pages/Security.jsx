export default function Security() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center  text-white px-6">
      <div className="max-w-3xl w-full  p-8 rounded-2xl ">
        <h1 className="text-3xl font-semibold text-amber-400 mb-4 text-center">
          Security
        </h1>

        <p className="text-[#d1d1d1] text-sm leading-relaxed text-center">
          Your privacy and security are important. This typing test stores only
          the information necessary for your account and performance tracking.
          No sensitive data is sold or shared.
        </p>

        <div className="mt-6 space-y-4 text-sm text-[#c3c3c3]">
          <div className="bg-[#2d2d2d] p-4 rounded-lg border border-[#505050]">
            <h2 className="text-lg font-semibold text-[#f0f0f0] mb-1">
              🔒 Account Security
            </h2>
            <p>
              Passwords are handled securely using Firebase Authentication. This
              means your credentials are encrypted and never visible to us.
            </p>
          </div>

          <div className="bg-[#2d2d2d] p-4 rounded-lg border border-[#505050]">
            <h2 className="text-lg font-semibold text-[#f0f0f0] mb-1">
              📦 Data Storage
            </h2>
            <p>
              Only basic typing statistics and account details (email, username)
              may be stored to enhance your experience. No financial or
              sensitive personal data is collected.
            </p>
          </div>

          <div className="bg-[#2d2d2d] p-4 rounded-lg border border-[#505050]">
            <h2 className="text-lg font-semibold text-[#f0f0f0] mb-1">
              🛡️ Safe Usage
            </h2>
            <p>
              This website does not track unnecessary information. You are
              always in full control of your data. You may delete your account
              anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
