import React, { ReactElement, useState } from "react";
import { AppProps } from "next/app";
import "../styles/global.scss";
import RemoteContext from "../components/remote/remotecontext";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const [isRemote, setRemoteness] = useState(false);

  return (
    <RemoteContext.Provider value={{ isRemote, setRemoteness }}>
      <Component {...pageProps} />
    </RemoteContext.Provider>
  );
}
