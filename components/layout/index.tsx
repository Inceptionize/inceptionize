/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement, ReactNode } from "react";
import Head from "next/head";
import styles from "./layout.module.scss";
import Link from "next/link";

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
        <header>
          <Link href="/" passHref>
            <a>
              <h1>Inceptionize!</h1>
            </a>
          </Link>
        </header>
        {children}
        <footer>
          <a href="https://forms.gle/13ZAJaZ6yQNrDGVb9">
            WE <span>♥</span> FEEDBACK, SEND US YOURS.
          </a>
        </footer>
      </div>
    </>
  );
}

export default Layout;
