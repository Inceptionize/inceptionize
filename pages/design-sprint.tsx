import React, { ReactElement } from "react";
import Layout from "../components/layout";
import DesignSprintContent from "../components/design-sprint-content";

function DesignSprint(): ReactElement {
  return (
    <Layout>
      <h2>Design Sprint page</h2>
      <DesignSprintContent />
    </Layout>
  );
}

export default DesignSprint;
