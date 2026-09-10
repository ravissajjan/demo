function add(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('add expects finite numbers');
  }

  return a + b;
}

function subtract(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('subtract expects finite numbers');
  }

  return a - b;
}

function multiply(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new TypeError('multiply expects finite numbers');
  }

  return a * b;
}

module.exports = {
  add,
  subtract,
  multiply,
};
