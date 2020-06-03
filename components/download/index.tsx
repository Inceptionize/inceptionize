import React, { ReactElement } from "react";
import styles from "./download.module.scss";

interface DownloadProps {
  href: string;
  label?: string;
}

function Download({ href, label = "Download" }: DownloadProps): ReactElement {
  return (
    <div>
      <a className={styles.download} href={href} download>
        <img src="/file-download.svg" alt="Download" />
        {label}
      </a>
    </div>
  );
}

export default Download;
