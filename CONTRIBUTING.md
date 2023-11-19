# Contributing to Tabulus

@todo

## Making your own changes

### 1. Fork and Clone the project

Create your own fork of the repo, clone, and create a new feature/bugfix branch (prefixed with either `feature/` or `bugfix/`).

### 2. Install Dependencies

`tabulus` is a monorepo with 2 projects:

- `@tabulus/docs` - The documentation site.
- `tabulus` - The main library project and storybook site.

Running

```sh
npm i
```

from the repo root directory will install all dependencies required, and all commands should be run from the root. Any scripts for the `tabulus` project have equivalents in the root `package.json`, while documentation scripts are prefixed with `docs:` (e.g: `docs:dev` to run a local version of the documentation site).

### 3. Run the project

#### `tabulus`

To keep track of changes to the existing components, you can run `storybook` in development to allow quick checking of the changes. If you are creating a new component, please also create a `[ComponentName].stories.tsx` file (and a test file). You can check the existing components for a rough template if you're new to storybook, or check out their [documentation](https://storybook.js.org/docs/react/writing-stories/introduction).

```sh
npm run storybook:start # Starts on port 6006 by default
```

### `@tabulus/docs`

You can also run the documentation site as a local remix server with hot-reloading to see your changes as you make them.

```sh
npm run docs:dev # Starts on port 3000 by default
```

### 4. Run Validation

Once you've made your changes, make sure that all typechecking, linting and tests are still passing by running

```sh
npm run validate
```

Providing there are no errors, you're good to go.

### 5. Submit your PR

Once you're ready to get the changes merged into `tabulus` or `@tabulus/docs`, create your PR! Please include any linked issues that the PR resolves, and as much information about the change as possible to help any maintainers to review your change as quickly as possible.

Once the PR has been reviewed (if it's your first one), or once it's marked as 'ready for review', a few automated checks will be performed, including a coverage check (please make sure you've added tests if you've added a feature).
