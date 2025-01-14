// Refactor following solution
// Reverse an array, you can't use .reverse()

const invert = (arr) => {
  const reversed = [];
  T = Object.keys(arr);
  T.forEach((_, i) => {
    T[i] = arr.pop();
  });
  return T;
};

module.exports = invert;
