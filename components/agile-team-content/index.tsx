import React, { ReactElement } from "react";
import styles from "./agileteamcontent.module.scss";

function AgileTeamContent(): ReactElement {
  return (
    <div className={styles.content}>
      <h2>Agile Team</h2>
      <p>
        Find out more about agile teams:
        <a
          href="https://www.funretrospectives.com/defining-the-team-principles/
"
        >
          agile team setup
        </a>
      </p>
    </div>
  );
}

export default AgileTeamContent;
