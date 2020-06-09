import React, { ReactElement } from "react";
import IntroDescription from "../intro-description";
import * as texts from "./texts";
import styles from "./designsprintcontent.module.scss";

function DesignSprintContent(): ReactElement {
  return (
    <div className={styles.content}>
      <h2>Design Sprint</h2>
      <IntroDescription>{texts.DESIGN_SPRINT_INTRO_TEXT}</IntroDescription>

      <p>Find out more about Design Sprint:</p>
      <a href="https://www.gv.com/sprint/">design sprint</a>
    </div>
  );
}

export default DesignSprintContent;
