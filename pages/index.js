import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import FrontPage from '@/components/index/FrontPage';
import { useAuthStore } from '@/utils/store';

export default function Home() {
  const router = useRouter();
  const loggedInUser = useAuthStore((state) => state.loggedInUser);

  useEffect(() => {
    !loggedInUser && router.push('/login');
  }, [loggedInUser, router]);

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
