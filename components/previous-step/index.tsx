/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from "react";
import Link from "next/link";
import styles from "./previousstep.module.scss";

interface PreviousStepProps {
  href: string;
}

function PreviousStep({ href }: PreviousStepProps): ReactElement {
  return (
    <div className={styles.container}>
      <Link href={href}>
        <img className={styles.previousstepid} src="/arrow-left-solid.svg" alt="Previous step" />
      </Link>
    </div>
  );
}

export default PreviousStep;
