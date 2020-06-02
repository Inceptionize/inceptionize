import React, { ReactElement, useContext } from "react";
import styles from "./leaninceptioncontent.module.scss";
import RemoteContext from "../remote/remotecontext";
import RemoteChecklist from "./remote-checklist";
import OnPremiseChecklist from "./on-premise-checklist";

function LeanInceptionContent(): ReactElement {
  const { isRemote } = useContext(RemoteContext);
  return (
    <div className={styles.content}>
      <h2>Lean Inception</h2>

      {isRemote ? <RemoteChecklist /> : <OnPremiseChecklist />}

      <div className={styles.links}>
        <h3>Additional links</h3>
        <a href="https://www.caroli.org/en/book/lean-inception-how-to-align-people-and-build-the-right-product/">
          caroli.org
        </a>
        <a href="https://www.slideshare.net/paulocaroli/lean-inception-how-to-align-people-and-build-the-right-product">
          How to align people and build the right product
        </a>
      </div>
    </div>
  );
}

export default LeanInceptionContent;
