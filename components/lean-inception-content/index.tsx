import React, { ReactElement } from "react";
import styles from "./leaninceptioncontent.module.scss";

function LeanInceptionContent(): ReactElement {
  return (
    <div className={styles.content}>
      <h2>Lean Inception</h2>
      <p>
        Find out more about Lean Inception:
        <a href="https://www.caroli.org/en/book/lean-inception-how-to-align-people-and-build-the-right-product/">
          caroli.org
        </a>
        <a href="https://www.slideshare.net/paulocaroli/lean-inception-how-to-align-people-and-build-the-right-product">
          How to align people and build the right product
        </a>
      </p>
    </div>
  );
}

export default LeanInceptionContent;
