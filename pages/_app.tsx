import "@styles/index.scss";
import React, { ReactElement } from "react";
import { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K1FH7N53LK"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K1FH7N53LK');
        `,
          }}
        />
        <script src="https://kit.fontawesome.com/636812bbf4.js" crossOrigin="anonymous"></script>
        <title>Seattle Spicy Salmon Roll</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
