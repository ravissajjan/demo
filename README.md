# CI/CD Demo

This repository is a simple Node.js-based CI/CD demo that uses a GitHub Actions pipeline.

## Project structure

- `src/index.js` prints a demo status object.
- `src/calc.js` contains basic arithmetic functions.
- `test/calc.test.js` contains tests for the arithmetic helpers.
- `.github/workflows/ci.yml` runs the CI pipeline.
- `.github/workflows/deploy.yml` runs a deployment job after a successful CI workflow.

## Local commands

```bash
npm ci
npm test
npm run lint
npm start
```

## GitHub Actions workflow

The CI workflow runs on pushes and pull requests to the `main` branch. It installs dependencies with `npm ci`, lints the code, executes tests, and runs the application.

The CD workflow uses `workflow_run` to trigger after a successful CI workflow result and also allows `workflow_dispatch` for manual deployment. In a real project it would deploy to a hosting provider or package registry.
