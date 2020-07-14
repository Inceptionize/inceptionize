import moment from "moment";
import dateHelper from "./date-helpers";

describe("date-helpers", () => {
  it("gives the next Monday", () => {
    const today = moment("2020-07-14");
    expect(dateHelper.getNextMonday(today).format("DD/MM/YYYY")).toEqual(moment("2020-07-20").format("DD/MM/YYYY"));
  });
  it("gives the start of the day", () => {
    const today = moment("2020-07-14 13:00");
    expect(dateHelper.getNextMonday(today).format("HH:mm:ss"))
      .toEqual("00:00:00");
  });
});
