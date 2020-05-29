import React, { ReactElement } from "react";
import Layout from "../components/layout";
import Home from "../components/home";

function HomePage(): ReactElement {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default HomePage;
