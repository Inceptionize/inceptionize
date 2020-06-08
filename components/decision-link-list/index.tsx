/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from "react";
import DecisionLink from "../decision-link";
import styles from "./decisionlinklist.module.scss";

function DecisionLinkList(): ReactElement {
  return (
    <div className={styles.row}>
      <DecisionLink href="/lean-inception" text="Lean Inception" />
      <DecisionLink href="/design-sprint" text="Design Sprint" />
      <DecisionLink href="/agile-team" text="Agile Team Setup" />
      <DecisionLink href="/outcome" text="I don't know" />
    </div>
  );
}

export default DecisionLinkList;
