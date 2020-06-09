import React, { ReactElement } from "react";
import styles from "./externallink.module.scss";

interface ExternalLinkProps {
  href: string;
  text: string;
}

function ExternalLink({ href, text }: ExternalLinkProps): ReactElement {
  return (
    <div className={styles.column}>
      <a href={href} target="_blank" rel="noreferrer" className={styles.decisionLink}>
        {text}
      </a>
    </div>
  );
}

export default ExternalLink;
