const fs = require('node:fs');
const path = require('node:path');
const { add, subtract, multiply } = require('./calc');

function main(options = {}) {
  const numbers = [
    add(10, 5),
    subtract(10, 5),
    multiply(10, 5),
  ];

  const result = {
    operation: 'cicd-demo',
    numbers,
    status: 'ok',
    timestamp: new Date().toISOString(),
  };

  if (options.outputFile) {
    const outputDir = path.dirname(options.outputFile);
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(options.outputFile, `${JSON.stringify(result, null, 2)}\n`);
  }

  console.log(JSON.stringify(result, null, 2));
  return result;
}

if (require.main === module) {
  main({ outputFile: path.resolve(process.cwd(), 'dist/demo-output.json') });
}

module.exports = {
  main,
  add,
  subtract,
  multiply,
};
