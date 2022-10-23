const urlRegex = new RegExp(
  /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/i
);
const hashtagRegex = new RegExp(/(#+[a-zA-Z0-9(_)]{1,})/);
const atRegex = new RegExp(/(@+[a-zA-Z0-9(_)]{1,})/);

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

export { getMediaClass, urlRegex, hashtagRegex, atRegex };
