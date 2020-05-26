import React, { ReactElement, ReactNode } from "react";
import Head from "next/head";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <Head>
        <title>Inceptionize</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className={styles.container}>{children}</div>;
    </>
  );
}

export default Layout;
