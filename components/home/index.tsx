import React, { ReactElement, useEffect } from "react";
import DecisionLink from "../decision-link";
import styles from "./home.module.scss";
import { initGA, logPageView } from "../utils/google-analytics";

declare global {
  interface Window {
    GA_INITIALIZED: boolean;
  }
}

function Home(): ReactElement {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  });

  return (
    <div className={styles.row}>
      <div className={styles.column}>
        <h2>
          Hello!{" "}
          <span role="img" aria-label="hand waving">
            👋
          </span>
        </h2>
        <h2>Inceptionize! will help you and your team organize inceptions in the easiest way possible.</h2>
        <h3>
          Select inception activities, create agendas, prepare logistics, and learn about various types of inceptions
          you can organize.
        </h3>

        <DecisionLink href="/remote" text="Let's get started!" />
      </div>
      <div className={styles.column}>
        <img src="/inceptionize.svg" alt="Inceptionize logo" />
      </div>
    </div>
  );
}

export default Home;
