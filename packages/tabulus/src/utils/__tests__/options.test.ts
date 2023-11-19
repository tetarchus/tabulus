import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { defaultOptions } from '@tabulus/config';

import { createTableOptions, validateOptions } from '../options';
import { WARNINGS } from '../warnings';

import type { TabulusOptions } from '@tabulus/types';
import type { DeepPartial } from 'ts-essentials';
import type { SpyInstance } from 'vitest';

let consoleWarn: SpyInstance<[...messages: unknown[]], void> | null = null;

const expectedError = WARNINGS.INVALID_OPTION('table', 'invalidOption');

const userOptions: DeepPartial<TabulusOptions> = {
  horizontalAlign: 'right',
};

const invalidOptions = {
  ...userOptions,
  invalidOption: 'Should Fail',
} as DeepPartial<TabulusOptions>;

const expectedMerge: TabulusOptions = {
  ...defaultOptions,
  horizontalAlign: 'right',
};

const expectedInvalidMerge = {
  ...defaultOptions,
  ...invalidOptions,
};

describe('Options Utils Tests', () => {
  beforeEach(() => {
    // Mock console.warn to hide the error and capture the output
    consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    // Reset the mock
    consoleWarn?.mockReset();
  });

  describe('Tests for `createTableOptions`', () => {
    it('should return a merged object containing all options', () => {
      expect.assertions(1);

      const mergedOptions = createTableOptions(userOptions, defaultOptions);

      expect(mergedOptions).toStrictEqual(expectedMerge);
    });

    it('should display a console warning, but return as normal, if there are invalid options', () => {
      expect.assertions(2);
      const mergedOptions = createTableOptions(invalidOptions, defaultOptions);

      expect(consoleWarn).toHaveBeenCalledWith(expectedError);
      expect(mergedOptions).toStrictEqual(expectedInvalidMerge);
    });
  });

  describe('Tests for `validateOptions`', () => {
    it('should complete without an error if all options are fine', () => {
      expect.assertions(1);
      validateOptions(userOptions);
      expect(consoleWarn).not.toHaveBeenCalled();
    });

    it('should display a console warning if there are invalid options', () => {
      expect.assertions(1);

      validateOptions(invalidOptions);

      expect(consoleWarn).toHaveBeenCalledWith(expectedError);
    });
  });
});
