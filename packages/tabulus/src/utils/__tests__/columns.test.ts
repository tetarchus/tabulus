import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { /* validateColumnDefinition, validateColumnDefinitions, */ validateIds } from '../columns';
import { WARNINGS } from '../warnings';

import type { ColumnDefinition } from '@tabulus/types';
import type { SpyInstance } from 'vitest';

let consoleWarn: SpyInstance<[...messages: unknown[]], void> | null = null;

/**
 * Column definitions containing duplicate column IDs to use in tests.
 * @todo Move to a mocked data folder to share?
 */
const columnDefinitionsWithDuplicates: ColumnDefinition[] = [
  { id: 'test', title: 'Test' },
  { id: 'test', title: 'Test' },
  { id: 'duplicate', title: 'Duplicate' },
  { id: 'duplicate', title: 'Duplicate' },
  { id: 'single', title: 'Single' },
];

const columnDefinitionsUnique: ColumnDefinition[] = [
  { id: 'this', title: 'Test' },
  { id: 'definition', title: 'Duplicate' },
  { id: 'will', title: 'Single' },
  { id: 'pass', title: 'Passes' },
  { id: 'all', title: 'Test' },
];

describe('Column Util Tests', () => {
  beforeEach(() => {
    // Mock console.warn to hide the error and capture the output
    consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    // Reset the mock
    consoleWarn?.mockReset();
  });

  describe('Tests for `validateIds`', () => {
    it('should pass without logging anything when there are no duplicate columns', () => {
      expect.assertions(1);
      validateIds(columnDefinitionsUnique);
      expect(consoleWarn).not.toHaveBeenCalled();
    });

    it('should return display error messsages when duplicate columns exist', () => {
      expect.assertions(1);

      const expectedMessage = WARNINGS.DUPLICATE_COL_ID(['test', 'duplicate']);

      validateIds(columnDefinitionsWithDuplicates);
      expect(consoleWarn).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
