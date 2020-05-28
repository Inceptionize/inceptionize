import React, { ReactElement } from "react";
import DecisionButton from "../decision-button";
import * as buttonLabels from "./constants";

function OutcomeChoice(): ReactElement {
  return (
    <div>
      <DecisionButton href="/lean-inception" text={buttonLabels.MVP}></DecisionButton>
      <DecisionButton href="/design-sprint" text={buttonLabels.PROTOTYPE}></DecisionButton>
      <DecisionButton href="/agile-team" text={buttonLabels.AGILE_TEAM}></DecisionButton>
    </div>
  );
}

export default OutcomeChoice;
