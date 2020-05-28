/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "./decisionbutton.module.scss";

interface ButtonProps {
  href: string;
  text: string;
}

function DecisionButton({ href, text }: ButtonProps): ReactElement {
  return (
    <Link href={href} passHref>
      <a className={styles.decisionButton}>{text}</a>
    </Link>
  );
}

export default DecisionButton;
