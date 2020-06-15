import React, { ReactElement, useEffect } from "react";
import DecisionLink from "../decision-link";
import ExternalLink from "../external-link";
import * as buttonLabels from "./constants";
import { FEEDBACK_FORM_URL } from "../constants";
import styles from "./outcomechoice.module.scss";
import ReactGA from "react-ga";

function OutcomeChoice(): ReactElement {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <div className={styles.row}>
      <DecisionLink href="/lean-inception" text={buttonLabels.MVP} />
      <DecisionLink href="/design-sprint" text={buttonLabels.PROTOTYPE} />
      <DecisionLink href="/agile-team" text={buttonLabels.AGILE_TEAM} />
      <ExternalLink href={FEEDBACK_FORM_URL} text={buttonLabels.NONE_OF_THESE} />
    </div>
  );
}

export default OutcomeChoice;
