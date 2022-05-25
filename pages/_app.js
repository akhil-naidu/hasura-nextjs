import { ChakraProvider } from '@chakra-ui/react';

import { AuthProvider } from '@/utils/context/AuthContext';
import { Provider } from 'urql';
import { client } from '@/utils/urqlClient';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Provider value={client}>
          <Component {...pageProps} />
        </Provider>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default MyApp;
