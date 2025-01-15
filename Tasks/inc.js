// Refactor following solution
// Increment all numbers in dictionary

const inc_numbers = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "number") {
      obj[key] += 1;
    }
  }
  return obj;
};

module.exports = inc_numbers;
