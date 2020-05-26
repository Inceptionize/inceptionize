import React, { ReactElement } from "react";
import Layout from "../components/Layout";
import DecisionButton from "../components/DecisionButton";

function InceptionChoice(): ReactElement {
  return (
    <Layout>
      <h2>What kind of inception are you planning?</h2>
      <DecisionButton href="/lean-inception" text="Lean Inception" />
    </Layout>
  );
}

export default InceptionChoice;
