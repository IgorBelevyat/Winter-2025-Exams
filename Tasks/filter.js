// Refactor following solution
// Filter array by type name

const Filter = (T, t) => {
  return T.filter(item => typeof item ===t);
};

module.exports = Filter;
