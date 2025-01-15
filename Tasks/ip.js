// Refactor following solution
// Split string by the first occurrence of separator

const Parseip = (input) => {
  const result = [];
  if (!input) return;

  const parts = input.split(".");
  if (parts.length != 4) return;

  for (const part of parts) {
    const num = parseInt(part, 10);
    if (isNaN(num) || num < 0 || num > 255) return;
    result.push(num);
  }

  return result.includes(undefined) ? undefined : result;
};

module.exports = Parseip;
