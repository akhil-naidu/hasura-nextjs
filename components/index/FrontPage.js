import React from 'react';
import { Container, Button, VStack, HStack } from '@chakra-ui/react';
import Link from 'next/link';

import { useAuth } from '@/utils/context/AuthContext';

const FrontPage = () => {
  const { loggedInUser } = useAuth();
  return (
    <Container maxW='full'>
      {loggedInUser?.email && (
        <HStack justify='space-between'>
          <p>{loggedInUser?.email}</p>
          <Button onClick={() => logout()}>Sign Out</Button>
        </HStack>
      )}
      <VStack>
        <ul>
          <li>
            <Link
              href={'/login'}
            >{`Feature One => Login and Signup form`}</Link>
          </li>
        </ul>
      </VStack>
    </Container>
  );
};

export default FrontPage;
