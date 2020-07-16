import React, { ReactElement } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import styles from "./activitiescalendar.module.scss";
import events from "./events";
import dateHelpers from "../date-helpers/date-helpers";

const localizer = momentLocalizer(moment);

function ActivitiesCalendar(): ReactElement {
  const todayStartOfDay: Date = new Date();
  todayStartOfDay.setHours(8, 0, 0, 0);
  const todayEndOfDay: Date = new Date();
  todayEndOfDay.setHours(18, 0, 0, 0);
  return (
    <div className={styles.container}>
      <Calendar
        localizer={localizer}
        events={events.map((x) => dateHelpers.convertEvent(dateHelpers.getNextMonday(moment()), x))}
        defaultView={"work_week"}
        views={{ month: true, work_week: true, agenda: true }}
        startAccessor="start"
        endAccessor="end"
        defaultDate={dateHelpers.getNextMonday(moment()).toDate()}
        min={todayStartOfDay}
        max={todayEndOfDay}
      />
    </div>
  );
}

export default ActivitiesCalendar;
