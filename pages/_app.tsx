import React, { ReactElement } from "react";
import { AppProps } from "next/app";
import "../styles/global.scss";
import { AppContextProvider } from "../components/context/app-context";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <AppContextProvider>
      <Component {...pageProps} />;
    </AppContextProvider>
  );
}
