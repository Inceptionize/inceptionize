/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "./decisionlink.module.scss";

interface LinkProps {
  href: string;
  text: string;
}

function DecisionLink({ href, text }: LinkProps): ReactElement {
  return (
    <Link href={href} passHref>
      <a className={styles.decisionLink}>{text}</a>
    </Link>
  );
}

export default DecisionLink;
