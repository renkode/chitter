import dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");
var updateLocale = require("dayjs/plugin/updateLocale");
var isToday = require("dayjs/plugin/isToday");
var config = {
  thresholds: [
    { l: "s", r: 1 },
    { l: "ss", r: 59, d: "second" },
    { l: "m", r: 1 },
    { l: "mm", r: 59, d: "minute" },
    { l: "h", r: 1 },
    { l: "hh", r: 23, d: "hour" },
    { l: "d", r: 1 },
    { l: "dd", r: 29, d: "day" },
    { l: "M", r: 1 },
    { l: "MM", r: 11, d: "month" },
    { l: "y" },
    { l: "yy", d: "year" },
  ],
};
dayjs.extend(relativeTime, config);
dayjs.extend(updateLocale);
dayjs.extend(isToday);
dayjs.updateLocale("en", {
  relativeTime: {
    past: "%s",
    s: "1s",
    ss: "%ds",
    m: "1m",
    mm: "%dm",
    h: "1h",
    hh: "%dh",
    d: "%dh",
  },
});

export default {
  formatDate(dateString, now) {
    if (!dateString) return "Unknown";
    const date = dayjs(dateString);
    const currentDate = dayjs(now);
    if (date.year() === currentDate.year()) {
      if (date.isToday() || currentDate.diff(date, "hour") < 23) {
        return date.fromNow();
      }
      return date.format("MMM D");
    } else {
      return date.format("MMM D, YYYY");
    }
  },
};