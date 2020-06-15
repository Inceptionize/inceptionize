import React, { ReactElement, useEffect } from "react";
import Layout from "../components/layout";
import DesignSprintContent from "../components/design-sprint-content";
import { initGA, logPageView } from "../components/utils/google-analytics";

declare global {
  interface Window {
    GA_INITIALIZED: boolean;
  }
}

function DesignSprint(): ReactElement {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  });

  return (
    <Layout>
      <DesignSprintContent />
    </Layout>
  );
}

export default DesignSprint;
