import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "../styles/decisionTree.module.scss";

function OutcomeChoice(): ReactElement {
  return (
    <div>
      <button className={styles.decisionButton}>
        <Link href="/coming-soon">
          <a href="/coming-soon" className={styles.decisionButtonLabel}>
            MVP
          </a>
        </Link>
      </button>
      <button className={styles.decisionButton}>
        <Link href="/coming-soon">
          <a href="/coming-soon" className={styles.decisionButtonLabel}>
            Prototype
          </a>
        </Link>
      </button>
      <button className={styles.decisionButton}>
        <Link href="/coming-soon">
          <a href="/coming-soon" className={styles.decisionButtonLabel}>
            Agile Team Setup
          </a>
        </Link>
      </button>
    </div>
  );
}

export default OutcomeChoice;
