import { useEffect, useState } from "react";
import AuthContext from "../Contexts/AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../config/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("shakil");
  const [loading, setLoading] = useState(true);

  const googleProviderLogin = provider => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const updateUser = (updatedData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedData);
  }

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [])

  const userInfo = {
    user,
    loading,
    setUser,
    googleProviderLogin,
    createAccount,
    loginUser,
    updateUser,
    logoutUser
  }
  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;