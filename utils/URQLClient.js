import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {
  Provider,
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
} from 'urql';

import { auth } from '@/utils/firebase';
import { useAuthStore } from '@/utils/store';

export const URQLProvider = ({ children }) => {
  const setLoggedInUser = useAuthStore((state) => state.setLoggedInUser);
  const loggedInUser = useAuthStore((state) => state.loggedInUser);

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

  return <Provider value={client}>{children}</Provider>;
};
