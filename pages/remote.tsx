import React, { ReactElement, useContext } from "react";
import Layout from "../components/layout";
import DecisionLink from "../components/decision-link";
import RemoteContext from "../components/remote/remotecontext";

function Remote(): ReactElement {
  const { setRemoteness } = useContext(RemoteContext);

  return (
    <Layout>
      <h2>Is your inception remote or on-premise?</h2>
      <button
        onClick={(): void => {
          setRemoteness(true);
        }}
      >
        <DecisionLink href="/choice" text="Remote" />
      </button>
      <button
        onClick={(): void => {
          setRemoteness(false);
        }}
      >
        <DecisionLink href="/choice" text="On-premise" />
      </button>
    </Layout>
  );
}

export default Remote;
