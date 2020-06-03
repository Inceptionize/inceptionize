import React, { ReactElement } from "react";
import DecisionLink from "../decision-link";

interface LinkProps {
  href: string;
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function DecisionButton({ href, text, onClick }: LinkProps): ReactElement {
  return (
    <button onClick={onClick}>
      <DecisionLink href={href} text={text} />
    </button>
  );
}

export default DecisionButton;
