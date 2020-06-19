import React, { ReactElement } from "react";
import styles from "./agendacontent.module.scss";
import PreviousStep from "../previous-step";

function AgendaContent(): ReactElement {
  return (
    <div className={styles.content}>
      <h1>The agenda creation is coming soon.</h1>
      <div className={styles.agendaimage}>
        <img src="/lean-inception-agenda.png" alt="Lean Inception Agenda" />
      </div>

      <PreviousStep href="/lean-inception" />
    </div>
  );
}

export default AgendaContent;
