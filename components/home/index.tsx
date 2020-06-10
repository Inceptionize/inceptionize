import React, { ReactElement } from "react";
import DecisionLink from "../decision-link";
import styles from "./home.module.scss";

function Home(): ReactElement {
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
        <DecisionLink href="/remote" text="Let's get started!" />
      </div>
      <div className={styles.column}>
        <img src="/inceptionize.svg" alt="Inceptionize logo" />
      </div>
    </div>
  );
}

export default Home;
