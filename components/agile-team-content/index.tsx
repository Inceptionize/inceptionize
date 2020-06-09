import React, { ReactElement } from "react";
import IntroDescription from "../intro-description";
import * as texts from "./texts";
import styles from "./agileteamcontent.module.scss";

function AgileTeamContent(): ReactElement {
  return (
    <div className={styles.content}>
      <h2>Agile Team Setup</h2>
      <IntroDescription text={texts.AGILE_TEAM_SETUP_INTRO_TEXT} />
      <p>Find out more about setting up an agile team:</p>
      <a href="https://www.funretrospectives.com/defining-the-team-principles/">agile team setup</a>
    </div>
  );
}

export default AgileTeamContent;
