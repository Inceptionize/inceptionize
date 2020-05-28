import React, { ReactElement } from "react";
import Layout from "../components/layout/Layout";
import DecisionButton from "../components/decision-button/DecisionButton";

function Remote(): ReactElement {
  return (
    <Layout>
      <h2>Is your inception remote or on-premise?</h2>
      <DecisionButton href="/choice" text="Remote" />
      <DecisionButton href="/choice" text="On-premise" />
    </Layout>
  );
}

export default Remote;
