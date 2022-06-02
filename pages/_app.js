import { ChakraProvider, HStack, Button } from '@chakra-ui/react';
import Link from 'next/link';

import '../styles/globals.css';
import { URQLProvider } from '@/utils/URQLClient';
import { useAuthStore } from '@/utils/store';

const MyApp = ({ Component, pageProps }) => {
  const loggedInUser = useAuthStore((state) => state.loggedInUser);
  const logout = useAuthStore((state) => state.logout);

  return (
    <ChakraProvider>
      <URQLProvider>
        {loggedInUser && (
          <HStack justify='space-between'>
            <Link href='/'>{loggedInUser?.email}</Link>
            <Button onClick={() => logout()}>Sign Out</Button>
          </HStack>
        )}
        <Component {...pageProps} />
      </URQLProvider>
    </ChakraProvider>
  );
};

export default MyApp;
