import { themes } from '@tabulus/theme';

import type { TableManagerReturn } from './types';
import type {
  FindColumnFunction,
  FindRowFunction,
  GetColumnOptionFunction,
  SimpleRowData,
} from '@tabulus/types';

//== Placeholder Functions for an empty context
const PLACEHOLDER_COMPONENT_FN = () => null;
const PLACEHOLDER_GET_COL_OPTION_FN = (() => {}) as GetColumnOptionFunction<SimpleRowData>;
const PLACEHOLDER_FIND_COL_FN = (() => {}) as FindColumnFunction<SimpleRowData>;
const PLACEHOLDER_FIND_ROW_FN = (() => {}) as FindRowFunction<SimpleRowData>;

/**
 * The initial value for the TableManager. Required to ensure that the when the context is used,
 * it always returns a value including some initial defaults.
 * @private
 */
const tableManagerInitialValue: TableManagerReturn<SimpleRowData> = {
  elementRef: { current: null },
  findColumn: PLACEHOLDER_FIND_COL_FN,
  findRow: PLACEHOLDER_FIND_ROW_FN,
  getColumnCount: () => 0,
  getColumnOption: PLACEHOLDER_GET_COL_OPTION_FN,
  getComponent: () => PLACEHOLDER_COMPONENT_FN,
  getRowCount: () => 0,
  initialized: false,
  renderColumns: () => null,
  renderRows: () => null,
  tableId: '',
  theme: themes.standard,
};

export { tableManagerInitialValue };
