import React, { ReactElement } from "react";
import styles from "./designsprintcontent.module.scss";

function DesignSprintContent(): ReactElement {
  return (
    <div className={styles.content}>
      <p>
        Find out more about Design Sprint:
        <a href="https://www.gv.com/sprint/">design sprint</a>
      </p>
    </div>
  );
}

export default DesignSprintContent;
