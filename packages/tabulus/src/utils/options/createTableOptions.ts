import { objectKeys } from '@tetarchus/utils';
import { mergeWith } from 'lodash-es';

import { globalDefaultTableOptions } from '@tabulus/config';

import { WARNINGS } from '../warnings';

import type { TabulusCompleteOptions, TabulusOptions } from '@tabulus/types';

/** Fallback to use when passed `userOptions` is undefined. */
const DEFAULT_USER_OPTIONS: TabulusOptions = {};

/**
 * Placeholder for customizing the options merge with mergeWith.
 * @see https://lodash.com/docs/4.17.15#mergeWith
 *
 * @private
 */
const optionsMergeCustomizer = () => {};

/**
 * Validates that all options in an object are valid. This can be used when not using typescript
 * to ensure that no invalid/removed options have been passed, or that no options have
 * been misspelt.
 * @param options The options object to validate. This can either be complete, or partial options.
 * @private
 */
const validateOptions = (options: TabulusOptions): void => {
  for (const key of objectKeys(options)) {
    if (!Object.hasOwn(globalDefaultTableOptions, key)) {
      console.warn(WARNINGS.INVALID_OPTION('table', key));
    }
  }
};

/**
 * Merges custom options with a set of defaults to create a custom set of table options to use.
 * @param base The base set of options to use. These are the fallbacks if an option is not set
 * in `userOptions`.
 * @param userOptions Partial options object to use as overrides.
 * @returns A merged {@link TabulusCompleteOptions} object containing the options to use for a table.
 * @private
 */
const createTableOptions = (
  base: TabulusCompleteOptions,
  userOptions: TabulusOptions | undefined = DEFAULT_USER_OPTIONS,
): TabulusCompleteOptions => {
  const merged = mergeWith({}, base, userOptions, optionsMergeCustomizer);

  const { debugInvalidOptions } = merged;
  debugInvalidOptions && validateOptions(merged);

  return merged;
};

export { createTableOptions };
