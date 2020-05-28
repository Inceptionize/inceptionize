import React, { ReactElement } from "react";
import DecisionButton from "../decision-button/DecisionButton";

function OutcomeChoice(): ReactElement {
  return (
    <div>
      <DecisionButton href="/lean-inception" text="MVP"></DecisionButton>
      <DecisionButton href="/design-sprint" text="Prototype"></DecisionButton>
      <DecisionButton href="/agile-team" text="Agile Team Setup"></DecisionButton>
    </div>
  );
}

export default OutcomeChoice;
