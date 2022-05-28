import { createContext, useState, useContext, useEffect } from 'react';
import { useMutation } from 'urql';

import { register, login, logout } from '@/utils/context/loginFunctions';
import { UserProfileGQL } from '@/graphql/user';

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
    setLoggedInUser,
    loggedInUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
