import { createContext, useState, useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { HStack, Button } from '@chakra-ui/react';

import { auth } from '@/utils/firebase';
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
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
      setLoggedInUser(currentUser),
    );

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {loggedInUser && (
        <HStack justify='space-between'>
          <p>{loggedInUser?.email}</p>
          <Button onClick={() => logout()}>Sign Out</Button>
        </HStack>
      )}
      {children}
    </AuthContext.Provider>
  );
};
