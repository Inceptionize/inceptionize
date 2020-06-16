import React, { ReactElement, useContext, useEffect } from "react";
import styles from "./leaninceptioncontent.module.scss";
import { AppContext } from "../context/app-context";
import RemoteChecklist from "./remote-checklist";
import OnPremiseChecklist from "./on-premise-checklist";
import IntroDescription from "../intro-description";
import * as texts from "./texts";
import { selectRemoteStatus } from "../../state/selector";
import { initGA, logEvent } from "../utils/google-analytics";
import DecisionButton from "../decision-button";

declare global {
  interface Window {
    GA_INITIALIZED: boolean;
  }
}

function LeanInceptionContent(): ReactElement {
  const { state } = useContext(AppContext);
  const isRemote = selectRemoteStatus(state);

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
  });

  return (
    <div className={styles.content}>
      <h2>Lean Inception</h2>

      <IntroDescription text={texts.LEAN_INCEPTION_INTRO_TEXT} />
      <div className={styles.agenda}>
      <DecisionButton
        href="/coming-soon"
        text="Create Agenda"
        onClick={(): void => {
          logEvent("User","createdAgenda");
        }}
      />
      </div>
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
