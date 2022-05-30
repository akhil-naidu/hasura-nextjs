import { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import '../styles/globals.css';
import { AuthProvider } from '@/utils/context/AuthContext';
import { Provider } from 'urql';
// import { client } from '@/utils/urqlClient';

import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
} from 'urql';

const MyApp = ({ Component, pageProps }) => {
  const [client, setClient] = useState();

  useEffect(() => {
    const urqlClient = createClient({
      url: process.env.NEXT_PUBLIC_HASURA_URL,
      exchanges: [dedupExchange, cacheExchange, fetchExchange],
      fetchOptions: () => {
        const token = window.localStorage.getItem('accessToken');
        return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
      },
    });

    setClient(urqlClient);
  }, []);

  return (
    <ChakraProvider>
      {/* maybe find some better logic other than this */}
      {client && (
        <Provider value={client}>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </Provider>
      )}
    </ChakraProvider>
  );
};

export default MyApp;
