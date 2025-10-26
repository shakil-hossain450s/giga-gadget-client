import { useEffect, useState } from "react";
import AuthContext from "../Contexts/AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../config/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("shakil");

  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const updateUser = (updatedData) => {
    return updateProfile(user, updatedData)
  }

  const logoutUser = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [])

  const userInfo = {
    user,
    setUser,
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