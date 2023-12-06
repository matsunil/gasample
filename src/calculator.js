function add(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

module.exports = { add };
