const getMaxNumber = (list) => {
  return list.length ? Math.max(...list.map(({ id }) => id)) : 0;
};

export default getMaxNumber;
