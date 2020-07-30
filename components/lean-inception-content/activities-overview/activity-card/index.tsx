/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement, useContext } from "react";
import styles from "../activities-overview.module.scss";
import ReactTooltip from "react-tooltip";
import { AppContext } from "../../../context/app-context";
import { selectModalVisible } from "../../../../state/selector";
import ActivityModal from "../activity-modal";

interface ActivityCardProps {
  title: string;
  desc: string;
  imagePath: string;
}

function ActivityCard({ title, desc, imagePath }: ActivityCardProps): ReactElement {
  const { state } = useContext(AppContext);
  const isModalVisible = selectModalVisible(state);

  return (
    <div className={styles.card}>
      {isModalVisible ? <ActivityModal title={title} description={desc} imagePath={imagePath} /> : <h3>{title}</h3>}

      <a data-tip={desc} data-event="click focus">
        i
      </a>
      <ReactTooltip
        arrowColor="#6b6b6b"
        type="light"
        globalEventOff="click"
        className={styles.information}
      ></ReactTooltip>
    </div>
  );
}

export default ActivityCard;
