import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);

export default function AuthProvider({ children }) {
  // console.log("auth", auth);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  // create user -> Password authentication
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign In -> Password authentication
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google auth
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Update Profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // logout -> Password authentication
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Auth stated changes ---> Manage Users
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log("current User", currentUser);
      if (currentUser) {
        // get token and store client
        const userInfo = {
          email: currentUser.email,
        };
        axiosPublic.post("/jwt",userInfo)
        .then(res=>{
          // console.log(res.data.token);
          if(res.data.token){
            localStorage.setItem('access-token',res.data.token)
          }
        });
      } else {
        // TODO:remove token(if token stored in the client side:Local storage,caching, in memory)
        localStorage.removeItem('access-token');
      }

      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}
