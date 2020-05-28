import React, { ReactElement } from "react";
import DecisionButton from "../decision-button";
import * as buttonLabels from "./constants";

function OutcomeChoice(): ReactElement {
  return (
    <div>
      <DecisionButton href="/lean-inception" text={buttonLabels.MVP} />
      <DecisionButton href="/design-sprint" text={buttonLabels.PROTOTYPE} />
      <DecisionButton href="/agile-team" text={buttonLabels.AGILE_TEAM} />
    </div>
  );
}

export default OutcomeChoice;
