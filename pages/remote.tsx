import React, { ReactElement, useContext } from "react";
import Layout from "../components/layout";
import DecisionButton from "../components/decision-button";
import RemoteContext from "../components/remote/remotecontext";

function Remote(): ReactElement {
  const { setRemoteness } = useContext(RemoteContext);

  return (
    <Layout>
      <h2>Is your inception remote or on-premise?</h2>
      <div
        onClick={(): any => {
          setRemoteness(true);
        }}
      >
        <DecisionButton href="/choice" text="Remote" />
      </div>
      <div>
        <DecisionButton href="/choice" text="On-premise" />
      </div>
    </Layout>
  );
}

export default Remote;
