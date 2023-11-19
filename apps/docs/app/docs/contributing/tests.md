# Testing

Before submitting a PR, please ensure that you have tested the code with

```sh
npm test
```

and all tests are passing. We have a coverage threshold of 95%, and each PR will be tested using codecov to check that coverage is maintained. This means that any extensions to code should have tests written where possible.

## Writing Tests

When writing tests for new code, please ahere the follwing guidelines (enforced by ESLint where possible):

- There should be 1 test file for each file being tested (e.g: `columns.ts` should have a `columns.test.ts`)
- Each test file should have 1 parent level `describe` block, named for the type of file it is testing, with child `describe` blocks for each individual function.
- Positive tests (e.g: Testing the way something _should_ work with 'good' input), should go before negative tests (e.g: Testing it fails with 'bad' input).
