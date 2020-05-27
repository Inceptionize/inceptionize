import React, { ReactElement } from "react";
import DecisionButton from "../decision-button/DecisionButton";

function OutcomeChoice(): ReactElement {
  return (
    <div>
      <DecisionButton href="/coming-soon" text="MVP"></DecisionButton>
      <DecisionButton href="/coming-soon" text="Prototype"></DecisionButton>
      <DecisionButton href="/coming-soon" text="Agile Team Setup"></DecisionButton>
    </div>
  );
}

export default OutcomeChoice;
