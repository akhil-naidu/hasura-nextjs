import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import FrontPage from '@/components/index/FrontPage';
import { useAuth } from '@/utils/context/AuthContext';

export default function Home() {
  const router = useRouter();
  const { loggedInUser } = useAuth();

  useEffect(() => {
    const accessToken = window.localStorage.getItem('accessToken');
    if (!accessToken) !loggedInUser && router.push('/login');
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
