import { createContext, useState, useContext, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { auth } from '@/utils/firebase';

const AuthContext = createContext();

const register = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);

    console.log(user);
  } catch (error) {
    console.error(error);
  }
};

const login = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);

    console.log(user);
  } catch (error) {
    console.error(error);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};

// Exporting useAuth Custom Hook and AuthProvider

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const value = {
    register,
    login,
    logout,
    loggedInUser,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
      setLoggedInUser(currentUser),
    );

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
