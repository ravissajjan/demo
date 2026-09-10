# Pull Request and Merge Approval Guide

This document explains how to open a pull request, request review, approve it, and protect the `main` branch so that code cannot be merged without approval.

## 1. Create a feature branch

```sh
cd /workspaces/demo
git checkout -b feature/github-actions-docker-demo
```

## 2. Commit and push the branch

```sh
git add .
git commit -m "Add CI/CD GitHub Actions and Docker demo"
git push origin feature/github-actions-docker-demo
```

## 3. Open a pull request

1. Open your repository on GitHub.
2. Go to the Pull requests tab.
3. Click New pull request.
4. Select the feature branch as the compare branch.
5. Use `main` as the base branch.
6. Add a clear PR title and a summary of the changes.
7. Click Create pull request.

## 4. Review and approval

1. Ask a teammate or reviewer to inspect the pull request.
2. The reviewer can leave comments, request changes, or approve the PR.
3. After all comments are addressed, the reviewer clicks Approve.

## 5. Merge after approval

1. Go to the pull request page.
2. Check that GitHub Actions status checks pass.
3. Click Merge pull request.
4. Choose a merge option such as Merge commit, Squash and merge, or Rebase and merge.
5. Confirm the merge.

## 6. Pull the latest code locally

```sh
git checkout main
git pull origin main
```

## Enforce required approval before merge

To make GitHub require approval before merging:

1. Open the repository on GitHub.
2. Go to `Settings → Branches`.
3. Click Add branch protection rule.
4. In Branch name pattern, enter `main`.
5. Enable:
   - Require a pull request before merging
   - Require approvals
   - Optionally require status checks to pass before merging
6. Save the rule.

This means that a pull request cannot be merged into `main` until a reviewer approves it and the required checks are green.
