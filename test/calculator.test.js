const {add} = require('../src/calculator');

describe('calculator test', () => {
  it('add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('add three numbers', () => {
    expect(add(1, 2, 3)).toBe(6);
  });
});

