import React, { ReactElement } from "react";
import styles from "./designsprintcontent.module.scss";

function DesignSprintContent(): ReactElement {
  return (
    <div className={styles.content}>
      <h2>Design Sprint</h2>
      <p>Find out more about Design Sprint:</p>
      <a href="https://www.gv.com/sprint/">design sprint</a>
    </div>
  );
}

export default DesignSprintContent;
