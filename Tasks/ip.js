// Refactor following solution
// Split string by the first occurrence of separator

const Parseip = (input) => {
  const result = [];
  if (input === '') return;
  else {
    const parts = input.split('.');
    if (parts.length != 4) return;
    for (const part of parts) {
      const num = parseInt(part);
      if (isNaN(num)) return;
      result.push (num)
    }
  }
  return result;
};

module.exports = Parseip;
