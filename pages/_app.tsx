import "@styles/index.scss";
import React, { ReactElement } from "react";
import { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/636812bbf4.js" crossOrigin="anonymous"></script>
        <title>Seattle Spicy Salmon Roll</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
