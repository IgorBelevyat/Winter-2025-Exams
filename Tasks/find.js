// Refactor following solution
// Find key by value

const find = (object, value) => {
  for (const name in object) {
    if (object[name] === value) {
      return name;
    } 
  }
  return undefined;
};

module.exports = find;
