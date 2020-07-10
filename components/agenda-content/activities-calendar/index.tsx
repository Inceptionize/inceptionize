import React, { ReactElement } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import styles from "./activitiescalendar.module.scss";

const localizer = momentLocalizer(moment);

function ActivitiesCalendar(): ReactElement {
  return (
    <div className={styles.container}>
      <Calendar
        localizer={localizer}
        events={[]}
        views={{ month: true, week: true }}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
}

export default ActivitiesCalendar;
