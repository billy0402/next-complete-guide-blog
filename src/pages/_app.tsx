import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '@components/layout/Layout';
import '@styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <title>Document</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
