import React, { ReactElement, useContext } from "react";
import styles from "./agendacontent.module.scss";
import PreviousStep from "../previous-step";
import { AppContext } from "../context/app-context";
import { selectActivitiesVisible } from "../../state/selector";
import ActivitiesOverview from "./activities-overview";
import ActivitiesCalendar from "./activities-calendar";

function AgendaContent(): ReactElement {
  const { state } = useContext(AppContext);
  const isActivitiesVisible = selectActivitiesVisible(state);

  return (
    <div className={styles.content}>
      <h1>The agenda creation is coming soon.</h1>
      <div className={styles.agendaimage}>
        <img src="/lean-inception-agenda.png" alt="Lean Inception Agenda" />
      </div>
      {isActivitiesVisible ? <ActivitiesOverview /> : null}

      {isActivitiesVisible ? <ActivitiesCalendar /> : null}

      <PreviousStep href="/lean-inception" />
    </div>
  );
}

export default AgendaContent;
