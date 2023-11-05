import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  console.log("current user", user);
  // sign up
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        toast.success("Login Successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  // log out
  const logout = () => {
    return signOut(auth);
  };

  // update profile
  const profileUpdate = (name, photo) => {
    return updateProfile(name, photo);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    login,
    googleLogin,
    logout,
	profileUpdate,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
