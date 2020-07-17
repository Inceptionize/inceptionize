import React, { ReactElement } from "react";
import styles from "./agendacontent.module.scss";
import PreviousStep from "../previous-step";
import ActivitiesCalendar from "./activities-calendar";

function AgendaContent(): ReactElement {
  return (
    <div className={styles.content}>
      <h2>Agenda for the Lean Inception</h2>

      <ActivitiesCalendar />

      <PreviousStep href="/lean-inception" />
    </div>
  );
}

export default AgendaContent;
