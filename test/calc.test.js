const test = require('node:test');
const assert = require('node:assert/strict');
const { add, subtract, multiply } = require('../src/calc');

test('add returns the sum of two numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('subtract returns the difference between two numbers', () => {
  assert.equal(subtract(10, 4), 6);
});

test('multiply returns the product of two numbers', () => {
  assert.equal(multiply(4, 5), 20);
});

test('add rejects non-number inputs', () => {
  assert.throws(() => add(Number.NaN, 2), /finite numbers/);
});
