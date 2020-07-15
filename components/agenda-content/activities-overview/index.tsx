/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement } from "react";
import styles from "./activities-overview.module.scss";
import ActivityCard from "./activity-card";
import events, { EventConfig } from "../activities-calendar/events";

function ActivitiesOverview(): ReactElement {
  return (
    <div>
      <h2>
        <strong>Lean Inception Activities</strong>
      </h2>
      <div data-testid="activities-overview" className={styles.cards}>
        {events.map((event: EventConfig, index) => {
          return <ActivityCard key={index} title={event.title} description={event.desc} />;
        })}
      </div>
    </div>
  );
}

export default ActivitiesOverview;
