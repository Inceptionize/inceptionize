import React, { ReactElement } from "react";
import Layout from "../components/layout";
import DecisionLinkList from "../components/decision-link-list";
import PreviousStep from "../components/previous-step";

function Choice(): ReactElement {
  return (
    <Layout>
      <h2>What kind of inception are you planning?</h2>
      <DecisionLinkList />
      <PreviousStep href="/remote" />
    </Layout>
  );
}

export default Choice;
