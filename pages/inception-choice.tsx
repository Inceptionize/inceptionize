import React, { ReactElement } from "react";
import Layout from "../components/layout/Layout";
import DecisionButton from "../components/decision-button/DecisionButton";

function InceptionChoice(): ReactElement {
  return (
    <Layout>
      <h2>What kind of inception are you planning?</h2>
      <DecisionButton href="/lean-inception" text="Lean Inception" />
      <DecisionButton href="/design-sprint" text="Design Sprint" />
    </Layout>
  );
}

export default InceptionChoice;
