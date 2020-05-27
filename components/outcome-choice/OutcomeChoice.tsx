import React, { ReactElement } from "react";
import Button from "../decision-button/DecisionButton";

function OutcomeChoice(): ReactElement {
  return (
    <div>
      <Button href="/coming-soon" text="MVP"></Button>
      <Button href="/coming-soon" text="Prototype"></Button>
      <Button href="/coming-soon" text="Agile Team Setup"></Button>
    </div>
  );
}

export default OutcomeChoice;
