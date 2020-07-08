import React, { ReactElement } from "react";
import styles from "../leaninceptioncontent.module.scss";
import DecisionButton from "../../decision-button";

interface AgendaButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function AgendaButton({ onClick }: AgendaButtonProps): ReactElement {
  return (
    <div className={styles.agenda}>
      <DecisionButton href="/agenda" text="Create Agenda" onClick={onClick} />
    </div>
  );
}

export default AgendaButton;
