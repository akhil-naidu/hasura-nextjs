import { createContext, useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import { onAuthStateChanged } from 'firebase/auth';
import { HStack, Button } from '@chakra-ui/react';
import {
  Provider,
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
} from 'urql';

import { auth } from '@/utils/firebase';
// import { register, login, logout } from '@/utils/context/loginFunctions';
import { useAuthStore } from '../store';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  // const [loggedInUser, setLoggedInUser] = useState(null);
  const register = useAuthStore((state) => state.register);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  const setLoggedInUser = useAuthStore((state) => state.setLoggedInUser);
  const loggedInUser = useAuthStore((state) => state.loggedInUser);

  const value = {
    register,
    login,
    logout,
    loggedInUser,
  };

  const client = createClient({
    url: process.env.NEXT_PUBLIC_HASURA_URL,
    exchanges: [dedupExchange, cacheExchange, fetchExchange],
    fetchOptions: () => {
      const token = loggedInUser?.accessToken;
      return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
    },
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoggedInUser(currentUser);
    });

    return unsubscribe;
  }, [setLoggedInUser]);

  return (
    <AuthContext.Provider value={value}>
      <Provider value={client}>
        {loggedInUser && (
          <HStack justify='space-between'>
            <Link href='/'>{loggedInUser?.email}</Link>
            <Button onClick={() => logout()}>Sign Out</Button>
          </HStack>
        )}
        {children}
      </Provider>
    </AuthContext.Provider>
  );
};
