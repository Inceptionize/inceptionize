import React, { ReactElement } from "react";
import Head from "next/head";
import Layout from "../components/Layout";

function HomePage(): ReactElement {
  return (
    <Layout>
      <Head>
        <title>Inceptionize</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Inceptionize! Coming Soon...</h1>
    </Layout>
  );
}

export default HomePage;
