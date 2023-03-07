import React, { FC } from "react";
import { Head, Html, Main, NextScript } from "next/document";

const Document: FC = () => {
  return (
    <Html lang="ru">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta
          name="description"
          content="Cloud Skinchanger - сервис, предоставляющий все скины для Dota 2. Безопасно и быстро. Arcane, Immortal, Legendary, Mythical, Uncommon, Common."
        />
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
