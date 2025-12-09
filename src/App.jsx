import { Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Leaderboard from "./pages/Leaderboard";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Security from "./pages/Security";
import Dashboard from "./pages/Dashboard/Dashboard";

import "./App.css";
import Navbar from "./components/Navbar";
import Optionbar from "./components/Optionbar";
import Mainbody from "./components/Mainbody";
import Footer from "./components/Footer";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();
  motion;

  return (
    <>
      <Navbar />
      {/* 👇 This wraps all the main app content */}
      <div className="min-h-[calc(100vh-5rem)] w-full bg-[#444546] flex flex-col justify-between">
        <div className="flex-grow overflow-hidden">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {/* 🏠 Home Typing Test Page */}
              <Route
                path="/"
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <Optionbar />
                    <Mainbody />
                  </motion.div>
                }
              />

              {/* 📊 Dashboard Page */}
              <Route
                path="/dashboard"
                element={
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Dashboard />
                  </motion.div>
                }
              />

              {/* ⚙️ Other Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/account" element={<Account />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/security" element={<Security />} />
            </Routes>
          </AnimatePresence>
        </div>

        {/* 👇 Always show footer at the bottom */}
        <Footer />
      </div>
    </>
  );
}

export default App;
