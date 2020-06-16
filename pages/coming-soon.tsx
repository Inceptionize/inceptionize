import React, { ReactElement } from "react";
import Layout from "../components/layout";
import PreviousStep from "../components/previous-step";

function ComingSoon(): ReactElement {
  return (
    <Layout>
      <h1>The agenda creation is coming soon.</h1>
      <PreviousStep href="/lean-inception" />
    </Layout>
  );
}

export default ComingSoon;
