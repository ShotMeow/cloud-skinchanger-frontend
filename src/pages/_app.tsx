import React, { FC } from "react";
import type { AppProps } from "next/app";

import "@/app/styles/globals.scss";
import { Provider } from "react-redux";
import { store } from "@/app/store";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
