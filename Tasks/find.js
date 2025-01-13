// Refactor following solution
// Find key by value

const find = (object, ...rest) => {
  const value = rest.pop(1);
  for (const name in object) {
    if (object[name] === value) {
      return name;
    } 
  }
  return undefined;
};

module.exports = find;
