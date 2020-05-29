import React, { ReactElement } from "react";
import Layout from "../components/layout";
import OutcomeChoice from "../components/outcome-choice";

function Outcome(): ReactElement {
  return (
    <Layout>
      <h2>What outcome do you expect from the inception?</h2>
      <OutcomeChoice />
    </Layout>
  );
}

export default Outcome;
