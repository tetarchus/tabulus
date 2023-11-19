import { mergeWith } from 'lodash-es';

import { defaultOptions } from '@tabulus/config';

import { objectKeys } from './object';
import { WARNINGS } from './warnings';

import type { TabulusOptions } from '@tabulus/types';
import type { DeepPartial } from 'ts-essentials';

const validateOptions = (options: DeepPartial<TabulusOptions>): void => {
  for (const key of objectKeys(options)) {
    if (!Object.hasOwn(defaultOptions, key)) {
      console.warn(WARNINGS.INVALID_OPTION('table', key));
    }
  }
};

/**
 *
 * @param tableOptions The table-specific options to use.
 * @param defaults
 * @returns
 */
const createTableOptions = (
  tableOptions: DeepPartial<TabulusOptions>,
  defaults: TabulusOptions,
): TabulusOptions => {
  const merged = mergeWith({}, defaults, tableOptions);
  validateOptions(merged);
  return merged;
};

export { createTableOptions, validateOptions };
