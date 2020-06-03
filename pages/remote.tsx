import React, { ReactElement, useContext } from "react";
import Layout from "../components/layout";
import RemoteContext from "../components/remote/remotecontext";
import DecisionButton from "../components/decision-button";

function Remote(): ReactElement {
  const { setRemoteness } = useContext(RemoteContext);

  return (
    <Layout>
      <h2>Is your inception remote or on-premise?</h2>
      <DecisionButton
        href="/choice"
        text="Remote"
        onClick={(): void => {
          setRemoteness(true);
        }}
      />
      <DecisionButton
        href="/choice"
        text="On-premise"
        onClick={(): void => {
          setRemoteness(false);
        }}
      />
    </Layout>
  );
}

export default Remote;
