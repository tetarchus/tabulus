export { getHorizontalAlignProperty, getVerticalAlignProperty } from './cell';
export { createColumnsFromDefinitions } from './column';
export { updateHistory } from './history';
export { createTableOptions, validateOptions } from './options';
export {
  setTableManagerStateInitialValue,
  tableManagerInitial,
  tableManagerReducer,
} from './reducers';
export { createRowsFromData } from './row';
export { ThemeProvider, styled } from './styled';
export {
  getColumnIndexNumber,
  getColumnOptionValue,
  getRowIndexNumber,
  getTableColumnsCount,
  getTableRowsCount,
} from './table';
export { WARNINGS } from './warnings';

export type { TableManagerActions } from './reducers';
