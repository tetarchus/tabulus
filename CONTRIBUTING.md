# Contribution Guide

Contributions are always welcome, whether you want to add a new feature, work on an issue, or fix a bug you've found yourself.

`tabulus` is organised as an [npm monorepo](https://docs.npmjs.com/cli/v7/using-npm/workspaces) with workspaces, so you should run all commands from the root directory.

There are currently 2 packages in the repo that can be developed:

- [tabulus](./packages/tabulus/README.md) - The main library
- [@tabulus/docs](./apps/docs/README.md) - The documentation and website.

For contributing to either package, the initial workflow is the same:

## Getting Started

To get up and running with your own copy of the repo to make changes, you need to fork

### 1. Fork and Clone the project

Create your own [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) of the repo and clone this into your development environment.

### 2. Create a new working branch

Depending on the purpose of your contribution, you either want to branch off of `master` (bug fixes) or `next` (new features/code refactoring). While not required, we suggest a branch naming structure of:

```sh
{branch-type}/{issue-ref}-{description}
```

Where `branch-type` is one of:

- `bugfix` - For fixing bugs
- `feat` - For adding new features
- `refactor` - For code refactoring that doesn't add any additional functionality, but simplifies/improves existing code.

### 3. Install dependencies

Depending on the source branch, the dependencies may have changed, so once you've created your working branch, you can ensure you're using the correct dependency versions you can run:

```sh
npm i
```

to install all required dependencies for the packges.

## Making Changes

Once you're set up, you can make changes to the relevant files and run the packages locally to ensure they're all working correctly. For more information on any guidelines on file structure, please see the contribution documentation in the storybook (`npm run sb` will start the storybook locally on port `6006`).

## Submitting a PR

Once you're changes are complete, please submit a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) against your source branch. If your changes are not quite ready to be reviewed, please create a draft request until you're happy with the changes for review.

There are PR templates in place with a checklist of things to ensure you've done before the PR can be merged, but please make sure that you have run typechecking, linting and tests on your code with `npm run validate`.

### Additional Tasks

You can speed up the review process by ensuring that everything is completed prior to the PR being marked as `Ready to Review`. If the PR is linked to an issue, please include `fixes {issue-ref}` in the body of the PR so that these are correctly linked. Additionally adding tags for `documentation` or `library`, depending on the packages involved, will allow us to see at a glance which packages are affected.

For most PR's, there may be some additional tasks to ensure that you have completed such as:

- Adding/updating tests - To ensure that any new/changed functionality is tested correctly, please ensure that tests are up-to-date and passing. New functionality should have testing written for it where possible.
- Adding/updating documentation - If you're changing the way something works, or adding some new functionality, please ensure that the documentation is updated to reflect the change.
