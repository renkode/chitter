import dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
var updateLocale = require("dayjs/plugin/updateLocale");
dayjs.extend(updateLocale);
var isToday = require("dayjs/plugin/isToday");
dayjs.extend(isToday);

dayjs.updateLocale("en", {
  relativeTime: {
    past: "%s",
    s: "%ds",
    m: "1m",
    mm: "%dm",
    h: "1h",
    hh: "%dh",
    d: "%dh",
  },
});

export default {
  formatDate(dateString) {
    if (!dateString) return "Unknown";
    const date = dayjs(dateString);
    if (date.year() === dayjs().year()) {
      console.log(dayjs().diff(date, "hour"));
      if (date.isToday() || dayjs().diff(date, "hour") < 23) {
        return date.fromNow();
      }
      return date.format("MMM D");
    } else {
      return date.format("MMM D, YYYY");
    }
  },
};
