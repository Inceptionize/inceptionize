import React, { ReactElement, useEffect } from "react";
import Layout from "../components/layout";
import AgileTeamContent from "../components/agile-team-content";
import { initGA, logPageView } from "../components/utils/google-analytics";

declare global {
  interface Window {
    GA_INITIALIZED: boolean;
  }
}

function AgileTeam(): ReactElement {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  });

  return (
    <Layout>
      <AgileTeamContent />
    </Layout>
  );
}

export default AgileTeam;
