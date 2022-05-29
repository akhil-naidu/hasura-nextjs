import React from 'react';

import { Container, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const FrontPage = () => {
  return (
    <Container maxW='full'>
      <VStack>
        <ul>
          <li>
            <Link
              href={'/login'}
            >{`Feature One => Login and Signup form`}</Link>
          </li>
          <li>
            <Link href={'/todo'}>{`Feature Two => ToDo App`}</Link>
          </li>
        </ul>
      </VStack>
    </Container>
  );
};

export default FrontPage;
