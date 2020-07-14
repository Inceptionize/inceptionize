import moment from "moment";
export default {
  getNextMonday: function (day: moment.Moment): moment.Moment {
    return day.add(1, "weeks").isoWeekday("Monday").startOf("day");
  },
};
