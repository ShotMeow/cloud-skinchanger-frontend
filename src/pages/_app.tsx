import React, { FC } from "react";
import type { AppProps } from "next/app";

import "@/app/styles/globals.scss";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
