import React, { ReactElement } from "react";
import Layout from "../components/layout";
import DecisionLink from "../components/decision-link";

function Choice(): ReactElement {
  return (
    <Layout>
      <h2>What kind of inception are you planning?</h2>
      <DecisionLink href="/lean-inception" text="Lean Inception" />
      <DecisionLink href="/design-sprint" text="Design Sprint" />
      <DecisionLink href="/agile-team" text="Agile Team Setup" />
      <DecisionLink href="/outcome" text="I don't know" />
    </Layout>
  );
}

export default Choice;
