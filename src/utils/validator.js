export const isContain = (target, className) => {
  return target.classList.contains(className);
};

export const isEmptyString = (str) => {
  return str.trim().length < 1;
};
