import React from 'react';
import { Center, Box } from '@chakra-ui/react';

const FrontPage = () => {
  return (
    <Center>
      <Box bgColor='blue.500' p={5} borderRadius={5}>
        Display feature specific intra links, which can help Hasura users to
        have a visual understanding to the documentation.
      </Box>
    </Center>
  );
};

export default FrontPage;
