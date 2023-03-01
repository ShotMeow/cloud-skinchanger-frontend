import React, { FC } from "react";
import { Head, Html, Main, NextScript } from "next/document";

const Document: FC = () => {
  return (
    <Html lang="ru">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <body>
        <Main />
        <div id="overlay" />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
