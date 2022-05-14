import React from 'react';
import { Container, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const FrontPage = () => {
  return (
    <Container>
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
