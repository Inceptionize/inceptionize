import React, { ReactElement } from "react";
import { AppProps } from "next/app";
import "../styles/global.scss";
import { AppContextProvider } from "../components/context/app-context";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <AppContextProvider>
      <Component {...pageProps} />;
    </AppContextProvider>
  );
}
