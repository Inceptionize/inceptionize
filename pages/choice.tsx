import React, { ReactElement } from "react";
import Layout from "../components/layout/Layout";
import DecisionButton from "../components/decision-button/DecisionButton";

function Choice(): ReactElement {
  return (
    <Layout>
      <h2>What kind of inception are you planning?</h2>
      <DecisionButton href="/lean-inception" text="Lean Inception" />
      <DecisionButton href="/design-sprint" text="Design Sprint" />
      <DecisionButton href="/agile-team" text="Agile Team" />
      <DecisionButton href="/outcome" text="I don't know" />
    </Layout>
  );
}

export default Choice;
