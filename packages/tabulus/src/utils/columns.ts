import { defaultColumnConfig } from '@tabulus/config';

import { objectKeys } from './object';
import { WARNINGS } from './warnings';

import type { ColumnDefinition } from '@tabulus/types';

/**
 * Displays a warning if there are any duplicate IDs in the columns array.
 * @param columnDefinitions The column definitions to validate IDs in.
 */
const validateIds = (columnDefinitions: ColumnDefinition[]): void => {
  const invalidColumns: string[] = [];
  for (const column of columnDefinitions) {
    const { id } = column;
    const colsWithId = columnDefinitions.filter(col => col.id === id);
    if (colsWithId.length > 1 && !invalidColumns.includes(id)) invalidColumns.push(id);
  }

  invalidColumns.length > 0 && console.warn(WARNINGS.DUPLICATE_COL_ID(invalidColumns));
};

/**
 * Checks for extra keys in a column definition and displays a warning if any are found.
 * @param columnDefinition The definition to validate.
 */
const validateColumnDefinition = (columnDefinition: ColumnDefinition): void => {
  for (const key of objectKeys(columnDefinition)) {
    if (!Object.hasOwn(defaultColumnConfig, key) && !['id', 'title'].includes(key)) {
      // Check the key exists in the default Column definition
      console.warn(WARNINGS.INVALID_OPTION('column', key));
    }
  }
};

/**
 * Checks column definitions for validity, including extra keys, and duplicate IDs.
 * @param columnDefinitions Array of column definitions to check.
 */
const validateColumnDefinitions = (columnDefinitions: ColumnDefinition[]): void => {
  validateIds(columnDefinitions);
  for (const column of columnDefinitions) {
    validateColumnDefinition(column);
  }
};

export { validateColumnDefinition, validateColumnDefinitions, validateIds };
