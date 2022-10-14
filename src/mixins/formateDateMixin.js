import dayjs from "dayjs";
var updateLocale = require("dayjs/plugin/updateLocale");
dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  relativeTime: {
    past: "%s ago",
    s: "%d s",
    m: "1m",
    mm: "%d m",
    h: "1h",
    hh: "%d h",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  },
});

export default {
  methods: {
    formatDate(dateString) {
      const date = dayjs(dateString);
      return date.format("MMM D, YYYY");
    },
  },
};
