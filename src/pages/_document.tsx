import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <div id='notification'></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
