import React, { ReactElement } from "react";
import Layout from "../components/layout";
import OutcomeChoice from "../components/outcome-choice";

function Outcome(): ReactElement {
  return (
    <Layout>
      <h1>What outcome do you expect from the inception?</h1>
      <OutcomeChoice></OutcomeChoice>
    </Layout>
  );
}

export default Outcome;
