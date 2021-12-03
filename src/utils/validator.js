export const isEmptyString = (str) => {
  if (typeof str !== 'string') {
    return false;
  }

  return str.trim().length < 1;
};
