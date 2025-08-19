import { useState, useEffect, useCallback } from "react";


export default function useUser() {
  const [user, setUser] = useState(function initUser() {
    const stored = localStorage.getItem("user");
    if (stored) return JSON.parse(stored);
    return null;
  });

  useEffect(function syncUser() {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = useCallback(function loginUser(newUser) {
    setUser(newUser);
  }, []);

  const logout = useCallback(function logoutUser() {
    setUser(null);
  }, []);

  return { user, login, logout };
}