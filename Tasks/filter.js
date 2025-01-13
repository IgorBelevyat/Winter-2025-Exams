// Refactor following solution
// Filter array by type name

const Filter = (array, type) => {
  return array.filter(item => typeof item === type);
};

module.exports = Filter;
