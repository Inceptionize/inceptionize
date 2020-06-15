import React, { ReactElement, useEffect } from "react";
import Layout from "../components/layout";
import LeanInceptionContent from "../components/lean-inception-content";
import { initGA, logPageView } from "../components/utils/google-analytics";

declare global {
  interface Window {
    GA_INITIALIZED: boolean;
  }
}

function LeanInception(): ReactElement {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  });

  return (
    <Layout>
      <LeanInceptionContent />
    </Layout>
  );
}

export default LeanInception;
