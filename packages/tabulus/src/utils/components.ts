import { mergeWith } from 'lodash-es';

import type { SimpleRowData, TabulusComponents, TabulusCustomComponents } from '@tabulus/types';

/** Fallback to use when passed `customComponents` is undefined. */
const DEFAULT_CUSTOM_COMPONENTS = {};

/**
 * Placeholder for customizing the components merge with mergeWith.
 * @see https://lodash.com/docs/4.17.15#mergeWith
 * @private
 */
const componentsMergeCustomizer = () => {};

/**
 * Merges custom components with a set of defaults to ensure all values are set.
 * @param base The base set of components to use. These are the fallbacks if a custom component is
 * not provided.
 * @param customComponents Partial components object to use as overrides.
 * @returns A merged {@link TabulusComponents} object containing the components to use for a table.
 * @private
 */
const createTableComponents = <RowData extends SimpleRowData>(
  base: TabulusComponents<RowData>,
  customComponents: TabulusCustomComponents<RowData> | undefined = DEFAULT_CUSTOM_COMPONENTS,
): TabulusComponents<RowData> => mergeWith({}, base, customComponents, componentsMergeCustomizer);

export { createTableComponents };
