import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Document</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
