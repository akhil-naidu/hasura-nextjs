import { ChakraProvider, HStack, Button } from '@chakra-ui/react';
import Link from 'next/link';

import '../styles/globals.css';
import { URQLProvider } from '@/utils/URQLClient';
import Navbar from '@/components/shared/Navbar';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <URQLProvider>
        <Navbar />
        <Component {...pageProps} />
      </URQLProvider>
    </ChakraProvider>
  );
};

export default MyApp;
