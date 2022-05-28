import Head from 'next/head';
import { useEffect } from 'react';
import { useMutation } from 'urql';

import FrontPage from '@/components/index/FrontPage';
import { UserProfileGQL } from '@/graphql/user';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hasura NextJS</title>
        <meta name='description' content='Fullstack with Hasura' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <FrontPage />
    </div>
  );
}
