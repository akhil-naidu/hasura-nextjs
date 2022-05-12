import Head from 'next/head';

const TechStack = () => {
  return (
    <div>
      <Head>
        <title>Hasura NextJS</title>
        <meta name='description' content='Fullstack with Hasura' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* TODO: Make this data come from Hasura rather than being hardcoded */}

      <ul>
        <li>NextJS as Frontend</li>
        <li>Hasura as backend, with Postgres as Database</li>
        <li>Chakra UI as component library</li>
        <li>
          urql as graphql client, it is the best light weight alternative for
          Apollo client
        </li>
        <li>Vercel to host the project</li>
      </ul>
    </div>
  );
};

export default TechStack;
