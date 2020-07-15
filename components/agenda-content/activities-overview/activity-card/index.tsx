/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement } from "react";
import styles from "../activities-overview.module.scss";

interface ActivityCardProps {
  title: string;
  description: string;
}

function ActivityCard({ title, description }: ActivityCardProps): ReactElement {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ActivityCard;
