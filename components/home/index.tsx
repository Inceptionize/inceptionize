import React, { ReactElement } from "react";
import DecisionLink from "../decision-link";

function Home(): ReactElement {
  return (
    <div>
      <h2>Helping teams and individuals organize inceptions in the easiest way possible.</h2>
      <DecisionLink href="/remote" text="Get started" />
    </div>
  );
}

export default Home;
