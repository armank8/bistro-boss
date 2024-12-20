import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

export default function AuthProvider() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const userInfo = {
    user,
    loading,
  };
  return <AuthContext.Provider value={userInfo}></AuthContext.Provider>;
}
