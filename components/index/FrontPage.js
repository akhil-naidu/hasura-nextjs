import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, Button, VStack, HStack } from '@chakra-ui/react';
import Link from 'next/link';

import { useAuth } from '@/utils/context/AuthContext';

const FrontPage = () => {
  const router = useRouter();
  const { loggedInUser, logout } = useAuth();

  useEffect(() => {
    !loggedInUser && router.push('/login');
  }, [loggedInUser, router]);

  return (
    <Container maxW='full'>
      {loggedInUser && (
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
