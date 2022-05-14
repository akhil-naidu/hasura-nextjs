import Head from 'next/head';

import FrontPage from '@/components/index/FrontPage';

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
