import { mergeWith } from 'lodash-es';

import type { ColumnConfig, FullColumnConfig } from '@tabulus/types';

const DEFAULT_COLUMN_OPTIONS = {};

/**
 * Placeholder for customizing the options merge with mergeWith.
 * @see https://lodash.com/docs/4.17.15#mergeWith
 *
 * @private
 */
const columnOptionsMergeCustomizer = () => {};

/**
 * Merges custom options with a set of defaults to create a custom set of column options to use.
 * @param userOptions Partial options object to use as overrides.
 * @param base The base set of options to use. These are the fallbacks if an option is not set
 * in `columnOptions`.
 * @returns A merged {@link FullColumnConfig} object containing the options to use for a column.
 * @private
 */
const createColumnOptions = (
  base: FullColumnConfig,
  columnOptions: ColumnConfig | undefined = DEFAULT_COLUMN_OPTIONS,
): FullColumnConfig => mergeWith({}, base, columnOptions, columnOptionsMergeCustomizer);

export { createColumnOptions };
