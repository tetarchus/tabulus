import { globalDefaultComponents } from '@tabulus/components/defaults';
import { globalDefaultTableOptions } from '@tabulus/config';

import type { TabulusRegistryReturn } from './types';

/**
 * The initial value for the TabulusRegistry. Required to ensure that the when the context is used,
 * it always returns a value including some initial defaults.
 * @private
 */
const tabulusRegistryInitialValue: TabulusRegistryReturn = {
  defaultComponents: globalDefaultComponents,
  defaultOptions: globalDefaultTableOptions,
  findTable: () => null,
  initialized: false,
  registerTable: () => {},
  tables: {},
};

export { tabulusRegistryInitialValue };
