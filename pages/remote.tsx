import React, { ReactElement, useContext } from "react";
import Layout from "../components/layout";
import DecisionButton from "../components/decision-button";
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
        <DecisionButton href="/choice" text="Remote" />
      </button>
      <button
        onClick={(): void => {
          setRemoteness(false);
        }}
      >
        <DecisionButton href="/choice" text="On-premise" />
      </button>
    </Layout>
  );
}

export default Remote;
