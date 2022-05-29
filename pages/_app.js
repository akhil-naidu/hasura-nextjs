import { ChakraProvider, HStack, Button } from '@chakra-ui/react';

import '../styles/globals.css';
import { AuthProvider } from '@/utils/context/AuthContext';
import { Provider } from 'urql';
import { client } from '@/utils/urqlClient';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Provider value={client}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </Provider>
    </ChakraProvider>
  );
};

export default MyApp;
