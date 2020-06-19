import React, { ReactElement, useContext, useEffect } from "react";
import styles from "./leaninceptioncontent.module.scss";
import { AppContext } from "../context/app-context";
import RemoteChecklist from "./remote-checklist";
import OnPremiseChecklist from "./on-premise-checklist";
import IntroDescription from "../intro-description";
import * as texts from "./texts";
import { selectRemoteStatus } from "../../state/selector";
import { initGA, logEvent } from "../utils/google-analytics";
import AgendaButton from "./agenda-button";
import RemoteAdditionalLinks from "./remote-additional-links";
import OnPremiseAdditionalLinks from "./on-premise-additional-links";

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

      <AgendaButton
        onClick={(): void => {
          logEvent("User", "createdAgenda");
        }}
      />

      {isRemote ? <RemoteChecklist /> : <OnPremiseChecklist />}

      <div className={styles.links}>
        <h3>Additional links</h3>
        {isRemote ? <RemoteAdditionalLinks /> : <OnPremiseAdditionalLinks />}
      </div>
    </div>
  );
}

export default LeanInceptionContent;
