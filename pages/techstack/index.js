import Head from 'next/head';
import {
  Center,
  VStack,
  HStack,
  Input,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

const TechStack = () => {
  // TODO: Make this data come from Hasura rather than being hardcoded
  const data = [
    {
      id: 1,
      tool: 'NextJS as Frontend',
      url: 'https://nextjs.org',
    },
    {
      id: 2,
      tool: 'Hasura as backend, with Postgres as Database',
      url: 'https://hasura.io',
    },
    {
      id: 3,
      tool: 'Chakra UI as component library',
      url: 'https://chakra-ui.com/',
    },
    {
      id: 4,
      tool: 'urql as graphql client, it is the best light weight alternative for Apollo client',
      url: 'https://graphql.org',
    },
    {
      id: 5,
      tool: 'Vercel to host the project',
      url: 'https://vercel.com',
    },
  ];

  return (
    <div>
      <Head>
        <title>Hasura NextJS</title>
        <meta name='description' content='Fullstack with Hasura' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Center>
        <VStack>
          <List spacing={3}>
            {data.map(({ id, tool, url }) => (
              <ListItem key={id}>
                <HStack>
                  <ListIcon as={MdCheckCircle} color='green' />
                  <p>{tool}</p>
                </HStack>
              </ListItem>
            ))}
          </List>
        </VStack>
      </Center>
    </div>
  );
};

export default TechStack;
