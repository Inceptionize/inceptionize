import React, { ReactElement, useEffect } from "react";
import Layout from "../components/layout";
import OutcomeChoice from "../components/outcome-choice";
import PreviousStep from "../components/previous-step";
import { initGA, logPageView } from "../components/utils/google-analytics";

declare global {
  interface Window {
    GA_INITIALIZED: boolean;
  }
}

function Outcome(): ReactElement {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  });

  return (
    <Layout>
      <h2>What outcome do you expect from the inception?</h2>
      <OutcomeChoice />
      <PreviousStep href="/choice" />
    </Layout>
  );
}

export default Outcome;
