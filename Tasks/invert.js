// Refactor following solution
// Reverse an array, you can't use .reverse()

const invert = (arr) => {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

module.exports = invert;
