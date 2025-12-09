// src/Context/AuthProvider.jsx
import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContextObject"; // ← ADD THIS
import { auth } from "../firebase"; // ← FIX IMPORT
import { onAuthStateChanged } from "firebase/auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ← ADD LOADING

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false); // ← ADD
    });
    return () => unsub();
  }, []);

  const value = {
    user,
    loading, // ← EXPORT LOADING
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
