import React, { ReactElement } from "react";
import DecisionLink from "../decision-link";
import * as buttonLabels from "./constants";

function OutcomeChoice(): ReactElement {
  return (
    <div>
      <DecisionLink href="/lean-inception" text={buttonLabels.MVP} />
      <DecisionLink href="/design-sprint" text={buttonLabels.PROTOTYPE} />
      <DecisionLink href="/agile-team" text={buttonLabels.AGILE_TEAM} />
    </div>
  );
}

export default OutcomeChoice;
