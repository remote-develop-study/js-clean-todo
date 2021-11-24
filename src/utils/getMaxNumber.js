const getMaxNumber = (list) => Math.max(...list.map(({ id }) => id));

export default getMaxNumber;
