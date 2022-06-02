import { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import '../styles/globals.css';
import { AuthProvider } from '@/utils/context/AuthContext';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      {/* maybe find some better logic other than this */}

      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default MyApp;
