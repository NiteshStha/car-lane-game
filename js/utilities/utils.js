/**
 * Checks whether the x position is in between two values.
 * @param {number} x The x position of the car.
 * @param {number} min The minimum x position.
 * @param {number} max The maximum x position.
 * @returns Returns either true or false.
 */
const isInBetween = (x, min, max) => {
  return (x - min) * (x - max) <= 0;
};

/**
 * Finds the lane the car is currently in in.
 * @param {number} x The x position of the car.
 * @returns Returns the currnet lane the car is in.
 */
const findLane = x => {
  const keys = Object.keys(LANES);
  let keyName = null;
  keys.map(key => {
    const find = isInBetween(x, LANES[key].x1, LANES[key].x2);
    // + for making sure that the returned key is always a number and not a string
    keyName = find ? +key : keyName;
  });

  return keyName;
};

/**
 * Returns a random number between 0 and the maximum value (max) specified in the parameter.
 * @param {number} max The Maximum limit of the random number
 * @returns {number} Returns a random number between 0 and the maximum value (max) specified in the parameter.
 */
const NumberGenerator = max => {
  return Math.floor(Math.random() * max) + 1;
};
