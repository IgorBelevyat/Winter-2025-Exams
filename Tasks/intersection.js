// Refactor following solution
// Find an intersection of two dictionaries

const intersection = (object1, object2) => {
  const result = {};
  for (const key of Object.keys(object1)) {
    if (object2[key] === object1[key]) {
      result[key] = object1[key];
    }
  }
  return result;
};

module.exports = intersection;
