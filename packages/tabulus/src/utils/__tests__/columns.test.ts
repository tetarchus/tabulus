import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { validateColumnDefinition, validateColumnDefinitions, validateIds } from '../columns';
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
const definitionWithExtraProperties = { id: 'this', title: 'Test', superfluous: true };

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

    it('should display warning messsages when duplicate columns exist', () => {
      expect.assertions(1);

      const expectedMessage = WARNINGS.DUPLICATE_COL_ID(['test', 'duplicate']);

      validateIds(columnDefinitionsWithDuplicates);
      expect(consoleWarn).toHaveBeenCalledWith(expectedMessage);
    });
  });

  describe('Tests for `validateColumnDefinition`', () => {
    it('should pass without logging anything when there are no extra properties', () => {
      expect.assertions(1);
      validateColumnDefinition(columnDefinitionsUnique[0]!);
      expect(consoleWarn).not.toHaveBeenCalled();
    });

    it('should display warning messsages when extra properties exist', () => {
      expect.assertions(1);
      validateColumnDefinition(definitionWithExtraProperties);
      const expectedMessage = WARNINGS.INVALID_OPTION('column', 'superfluous');
      expect(consoleWarn).toHaveBeenCalledWith(expectedMessage);
    });
  });

  describe('Tests for `validateColumnDefinitions`', () => {
    it('should pass without logging anything when there are no extra properties in any definitions', () => {
      expect.assertions(1);
      validateColumnDefinitions(columnDefinitionsUnique);
      expect(consoleWarn).not.toHaveBeenCalled();
    });

    it('should display warning messsages when extra properties exist in a definition', () => {
      expect.assertions(1);
      validateColumnDefinitions(
        Array.from<ColumnDefinition>({ length: 3 }).fill(definitionWithExtraProperties),
      );
      const expectedMessage = WARNINGS.INVALID_OPTION('column', 'superfluous');
      expect(consoleWarn).toHaveBeenLastCalledWith(expectedMessage);
    });

    it('should display one warning messsage for each extra property', () => {
      expect.assertions(1);
      const arrayLength = 3;
      validateColumnDefinitions(
        Array.from<ColumnDefinition>({ length: arrayLength }).fill(definitionWithExtraProperties),
      );
      // Called once for each incorrect item, plus another once for the extra property
      expect(consoleWarn).toHaveBeenCalledTimes(arrayLength + 1);
    });
  });
});
