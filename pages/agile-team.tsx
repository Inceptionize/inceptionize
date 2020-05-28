import React, { ReactElement } from "react";
import Layout from "../components/layout";
import AgileTeamContent from "../components/agile-team-content";

function AgileTeam(): ReactElement {
  return (
    <Layout>
      <AgileTeamContent />
    </Layout>
  );
}

export default AgileTeam;
