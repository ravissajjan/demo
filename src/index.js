const { add, subtract, multiply } = require('./calc');

function main() {
  const numbers = [
    add(10, 5),
    subtract(10, 5),
    multiply(10, 5),
  ];

  const result = {
    operation: 'cicd-demo',
    numbers,
    status: 'ok',
  };

  console.log(JSON.stringify(result, null, 2));
}

if (require.main === module) {
  main();
}

module.exports = {
  main,
  add,
  subtract,
  multiply,
};
