export interface EventConfig {
  title: string;
  desc: string;
  day: number;
  start: number;
  end: number;
}

export interface CalendarEvent {
  id: number;
  title: string;
  desc: string;
  start: Date;
  end: Date;
}

export default {
  getEvents: (): EventConfig[] => {
    return [
      {
        title: "Meeting",
        day: 1,
        start: 10,
        end: 12,
        desc: "Pre-meeting meeting, to prepare for the meeting",
      },
      {
        title: "Meeting",
        day: 1,
        start: 13,
        end: 16,
        desc: "Pre-meeting meeting, to prepare for the meeting",
      },
      {
        title: "Meeting",
        day: 2,
        start: 10,
        end: 12,
        desc: "Pre-meeting meeting, to prepare for the meeting",
      },
    ];
  },
};
