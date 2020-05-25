import React, { ReactElement } from "react";
import Head from "next/head";

function HomePage(): ReactElement {
  return (
    <>
      <Head>
        <title>Inceptionize</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Inceptionize! Coming Soon...</h1>
    </>
  );
}

export default HomePage;
