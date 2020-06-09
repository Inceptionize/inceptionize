/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement, ReactNode } from "react";
import Head from "next/head";
import styles from "./layout.module.scss";
import Link from "next/link";
import { FEEDBACK_FORM_URL } from "../constants";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <Head>
        <title>Inceptionize</title>
        <meta
          name="description"
          content="An application that helps teams and individuals organize inceptions in the easiest way possible."
        />

        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/" passHref>
            <a>
              <h1>Inceptionize!</h1>
            </a>
          </Link>
        </header>
        <div>{children}</div>
        <footer className={styles.footer}>
          <a href={FEEDBACK_FORM_URL} target="_blank" rel="noreferrer">
            WE <span>♥</span> FEEDBACK, SEND US YOURS
          </a>
        </footer>
      </div>
    </>
  );
}

export default Layout;
