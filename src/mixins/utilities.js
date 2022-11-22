const urlRegex = new RegExp(
  /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?(?<=[^\r\n])(?=[^\r\n])/i
);
const hashtagRegex = new RegExp(/(#+[a-zA-Z0-9(_)]{1,})/);
const atRegex = new RegExp(/^(@[a-zA-Z0-9_]{1,}[\s\S])*$/);
const usernameRegex = new RegExp(/^[a-zA-Z0-9_]*$/);
const emailRegex = new RegExp(
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
);

const getMediaClass = (images) => {
  if (!images || images.length === 0) return;
  switch (images.length) {
    case 1:
      return "one-img";
    case 2:
      return "two-img";
    case 3:
      return "three-img";
    case 4:
      return "four-img";
    default:
      return "";
  }
};

const getSingular = (string, num) => {
  return num === 1 ? string.slice(0, string.length - 1) : string;
};

const calendar = [
  {
    month: "",
    days: "",
  },
  {
    month: "January",
    days: 31,
  },
  {
    month: "February",
    days: 29,
  },
  {
    month: "March",
    days: 31,
  },
  {
    month: "April",
    days: 30,
  },
  {
    month: "May",
    days: 31,
  },
  {
    month: "June",
    days: 30,
  },
  {
    month: "July",
    days: 31,
  },
  {
    month: "August",
    days: 31,
  },
  {
    month: "September",
    days: 30,
  },
  {
    month: "October",
    days: 31,
  },
  {
    month: "November",
    days: 30,
  },
  {
    month: "December",
    days: 31,
  },
];

export {
  getMediaClass,
  urlRegex,
  hashtagRegex,
  atRegex,
  usernameRegex,
  emailRegex,
  calendar,
  getSingular,
};
