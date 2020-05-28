import React, { ReactElement } from "react";
import Layout from "../components/layout";
import LeanInceptionContent from "../components/lean-inception-content";

function LeanInception(): ReactElement {
  return (
    <Layout>
      <h2>Lean Inception</h2>
      <LeanInceptionContent />
    </Layout>
  );
}

export default LeanInception;
