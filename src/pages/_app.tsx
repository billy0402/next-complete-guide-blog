import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '@components/layout/Layout';
import '@styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <title>Billy&apos;s Next Blog</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
