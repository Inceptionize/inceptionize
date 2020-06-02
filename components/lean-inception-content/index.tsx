import React, { ReactElement, useContext } from "react";
import styles from "./leaninceptioncontent.module.scss";
import RemoteContext from "../remote/remotecontext";

function LeanInceptionContent(): ReactElement {
  const { isRemote } = useContext(RemoteContext);
  return (
    <div className={styles.content}>
      <h2>Lean Inception</h2>
      <p>Find out more about Lean Inception:</p>
      <a href="https://www.caroli.org/en/book/lean-inception-how-to-align-people-and-build-the-right-product/">
        caroli.org
      </a>
      <a href="https://www.slideshare.net/paulocaroli/lean-inception-how-to-align-people-and-build-the-right-product">
        How to align people and build the right product
      </a>

      <h3>{isRemote ? "Remote checklist" : "On-premise checklist"}</h3>
    </div>
  );
}

export default LeanInceptionContent;
