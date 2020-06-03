import React, { ReactElement } from "react";
import DecisionLink from "../decision-link";
import styles from "./decisionbutton.module.scss";

interface ButtonProps {
  href: string;
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function DecisionButton({ href, text, onClick }: ButtonProps): ReactElement {
  return (
    <button className={styles.button} onClick={onClick}>
      <DecisionLink href={href} text={text} />
    </button>
  );
}

export default DecisionButton;
