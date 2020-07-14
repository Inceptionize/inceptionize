import moment from "moment";
import { CalendarEvent, EventConfig } from "../activities-calendar/events";
export default {
  getNextMonday: (day: moment.Moment): moment.Moment => {
    return day.add(1, "weeks").isoWeekday("Monday").startOf("day");
  },
  convertEvent: (inceptionStartDate: moment.Moment, event: EventConfig): CalendarEvent => {
    const start = inceptionStartDate
      .clone()
      .add(event.day - 1, "days")
      .add(event.start, "hours")
      .toDate();
    const end = inceptionStartDate
      .clone()
      .add(event.day - 1, "days")
      .add(event.end, "hours")
      .toDate();
    return {
      id: 0,
      title: event.title,
      desc: event.desc,
      start: start,
      end: end,
    };
  },
};
