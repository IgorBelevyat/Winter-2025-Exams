// Refactor following solution
// Find key by value

const find = (obj, value) => 
  Object.entries(obj).find(([key, val]) => val === value)?.[0];

module.exports = find;
