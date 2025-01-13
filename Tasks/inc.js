// Refactor following solution
// Increment all numbers in dictionary

let inc_numbers = (obj) => {
  for (key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] = obj[key] + 1;
    }
  }
  return obj;
};

module.exports = inc_numbers;
