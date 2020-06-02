import React, { ReactElement } from "react";
import DecisionButton from "../decision-button";
import styles from "./home.module.scss";

function Home(): ReactElement {
  return (
    <div>
      <h2 className={styles.subheading}>
        Helping teams and individuals organize inceptions in the easiest way possible.
      </h2>
      <DecisionButton href="/remote" text="Get started" />
    </div>
  );
}

export default Home;
