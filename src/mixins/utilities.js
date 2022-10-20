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

export { getMediaClass };
