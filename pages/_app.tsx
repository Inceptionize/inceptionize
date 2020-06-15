import React, { ReactElement, useEffect } from "react";
import { AppProps } from "next/app";
import "../styles/global.scss";
import { AppContextProvider } from "../components/context/app-context";
import ReactGA from "react-ga";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const App_ID = "UA-169236210-1";
  useEffect(() => {
    ReactGA.initialize(App_ID);
  });
  return (
    <AppContextProvider>
      <Component {...pageProps} />;
    </AppContextProvider>
  );
}
