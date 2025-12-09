import { useState } from "react";
import useAuth from "../Context/useAuth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const { signup, login, googleLogin } = useAuth();

  // signup form values
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // login form values
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    const res = await signup(newEmail, newPassword);
    if (res?.error) setMessage(res.error);
    else {
      setMessage("Account created successfully!");
      navigate("/"); // or "/dashboard"
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    const res = await login(loginEmail, loginPassword);
    if (res?.error) setMessage(res.error);
    else navigate("/");
  };

  const handleGoogleLogin = async () => {
    const res = await googleLogin();
    if (res?.error) setMessage(res.error);
    else navigate("/");
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] flex justify-center  items-center  text-white px-2 py-4">
      <div className="w-full max-w-3xl  px-8 py-8 rounded-2xl bg-[#3f3e3e] border border-[#555] shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT SIDE - SIGN UP */}
        <div>
          <h2 className="text-2xl font-semibold text-[#c5c2c2]  mb-4">
            Create acc / register
          </h2>

          <form
            className="flex flex-col gap-3 items-center"
            onSubmit={handleSignup}
          >
            <input
              className=" w-full p-2.5 rounded-lg bg-[#2b2a2a] border border-[#444] text-sm text-white outline-none"
              placeholder=" username"
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />

            <input
              className=" w-full p-2.5 rounded-lg bg-[#2b2a2a] border border-[#444] text-sm text-white outline-none"
              placeholder=" email"
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />

            <input
              className="w-full p-2.5 rounded-lg bg-[#2b2a2a] border border-[#444] text-sm text-white outline-none"
              placeholder=" password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <input
              className=" w-full p-2.5 rounded-lg bg-[#2b2a2a] border border-[#444] text-sm text-white outline-none"
              placeholder="Confirm password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              type="submit"
              className=" px-6 py-2 mt-1 bg-[#e2cbb3] rounded-2xl text-md font-medium text-black hover:bg-[#f5d3ac] cursor-pointer transition"
            >
              Sign in
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - LOGIN */}
        <div>
          <h2 className="text-2xl font-semibold text-[#c5c2c2] mb-4">Login</h2>

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2.5 p-2.5 rounded-lg bg-[#d8d4d4] text-sm text-black font-semibold cursor-pointer hover:opacity-90 transition"
          >
            <FcGoogle size={20} /> Login with Google
          </button>

          <div className="my-3 text-center text-gray-300 text-xs">or</div>

          <form
            className="flex flex-col gap-3 items-center"
            onSubmit={handleLogin}
          >
            <input
              className="w-full p-2.5 rounded-lg bg-[#2b2a2a] border border-[#444] text-sm text-white outline-none"
              placeholder="Email"
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />

            <input
              className=" w-full p-2.5 rounded-lg bg-[#2b2a2a] border border-[#444] text-sm text-white outline-none"
              placeholder="Password"
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />

            <button
              type="submit"
              className=" px-6 py-2 mt-1 bg-[#e2cbb3] rounded-2xl text-md font-medium text-black hover:bg-[#f5d3ac] cursor-pointer transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {message && (
        <p className="text-red-400 mt-3 text-center text-sm absolute bottom-2">
          {message}
        </p>
      )}
    </div>
  );
}
