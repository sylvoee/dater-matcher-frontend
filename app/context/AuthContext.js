"use client";

import { createContext, useState, useContext } from "react";

// Create context
const AuthContext = createContext();

// Context Provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);       // store logged-in user data
  const [loading, setLoading] = useState(false); // loading state
  const [error, setError] = useState(null);      // error messages

  // Login function
  async function login(email, password) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }); if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();
      setUser(data.user); // store user data from API
      return data;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  } 
  return (
    <AuthContext.Provider value={{ user, loading, error, login }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use auth context
export function useAuth() {
  return useContext(AuthContext);
}