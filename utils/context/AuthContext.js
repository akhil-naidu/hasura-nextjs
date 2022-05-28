import { createContext, useState, useContext, useEffect } from 'react';

import { register, login, logout } from '@/utils/context/loginFunctions';

const AuthContext = createContext();

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
    setLoggedInUser,
  };

  useEffect(() => {}, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
