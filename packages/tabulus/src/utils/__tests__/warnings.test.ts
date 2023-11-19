import { describe, expect, it } from 'vitest';

import { WARNINGS } from '../warnings';

const { DUPLICATE_COL_ID, INVALID_OPTION, ...rest } = WARNINGS;

describe('Warning Util Tests', () => {
  it('should display the correct message for `DUPLICATE_COL_ID`', () => {
    expect.assertions(1);
    const duplicateCols = ['test', 'duplicate'];
    const expectedMessage = `Tabulus: 2 column IDs (test,duplicate) are duplicated in your columns definition. This may cause unexpected side effects. Please ensure each column has a unique ID.`;
    const message = DUPLICATE_COL_ID(duplicateCols);
    expect(message).toMatch(expectedMessage);
  });

  it('should display the correct message for `INVALID_OPTION`', () => {
    expect.assertions(1);
    const expectedMessage = `Tabulus: Invalid table option: invalidOption. Please check your options definition for spelling errors.`;
    const message = INVALID_OPTION('table', 'invalidOption');
    expect(message).toMatch(expectedMessage);
  });

  it('should have no missing tests', () => {
    expect.assertions(1);
    expect(Object.keys(rest)).toHaveLength(0);
  });
});
