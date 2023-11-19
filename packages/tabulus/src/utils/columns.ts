import { objectEntries } from './object';
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

const validateColumnDefinition = (columnDefinition: ColumnDefinition): void => {
  for (const [key, value] of objectEntries(columnDefinition)) {
    // Check the key exists in the default Column definition
    // Check the value is valid
    // If the value is an object, scan that too.
  }
};

const validateColumnDefinitions = (columnDefinitions: ColumnDefinition[]): void => {
  validateIds(columnDefinitions);
  for (const column of columnDefinitions) {
    validateColumnDefinition(column);
  }
};

export { validateColumnDefinition, validateColumnDefinitions, validateIds };
