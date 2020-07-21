/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from "react";
import styles from "../activities-overview.module.scss";
import ReactTooltip from "react-tooltip";

interface ActivityCardProps {
  title: string;
  description: string;
}

function ActivityCard({ title, description }: ActivityCardProps): ReactElement {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <a data-tip={description} data-event="click focus">
        i
      </a>
      <ReactTooltip type="light" globalEventOff="click" className={styles.information}></ReactTooltip>
    </div>
  );
}

export default ActivityCard;
