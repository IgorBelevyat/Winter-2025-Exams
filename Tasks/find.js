// Refactor following solution
// Find key by value

const find = (obj, value) => {
  for (const [key, val] of Object.entries(obj)) {
    if (object[val] === value) {
      return key;
    } 
  }
  return undefined;
};

module.exports = find;
