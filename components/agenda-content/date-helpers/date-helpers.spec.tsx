import moment from "moment";
import dateHelper from "./date-helpers";
import { CalendarEvent, EventConfig } from "../activities-calendar/events";

describe("date-helpers", () => {
  it("gives the next Monday", () => {
    const today = moment("2020-07-14");
    expect(dateHelper.getNextMonday(today).format("DD/MM/YYYY")).toEqual(moment("2020-07-20").format("DD/MM/YYYY"));
  });

  it("gives the start of the day", () => {
    const today = moment("2020-07-14 13:00");
    expect(dateHelper.getNextMonday(today).format("HH:mm:ss")).toEqual("00:00:00");
  });

  it("converts EventConfig to CalendarEvent", () => {
    const inceptionStartDate = moment("2020-07-20");

    const event: EventConfig = {
      title: "Meeting",
      day: 1,
      start: 10,
      end: 12,
      desc: "Pre-meeting meeting, to prepare for the meeting",
    };

    const calendarEvent: CalendarEvent = {
      id: 0,
      title: "Meeting",
      start: new Date(2020, 6, 20, 10),
      end: new Date(2020, 6, 20, 12),
      desc: "Pre-meeting meeting, to prepare for the meeting",
    };
    expect(dateHelper.convertEvent(inceptionStartDate, event)).toEqual(calendarEvent);
  });

  it("converts EventConfig to CalendarEvent for day 2", () => {
    const inceptionStartDate = moment("2020-07-20");

    const event: EventConfig = {
      title: "Meeting",
      day: 2,
      start: 10,
      end: 12,
      desc: "Pre-meeting meeting, to prepare for the meeting",
    };

    const calendarEvent: CalendarEvent = {
      id: 0,
      title: "Meeting",
      start: new Date(2020, 6, 21, 10),
      end: new Date(2020, 6, 21, 12),
      desc: "Pre-meeting meeting, to prepare for the meeting",
    };
    expect(dateHelper.convertEvent(inceptionStartDate, event)).toEqual(calendarEvent);
  });
});
