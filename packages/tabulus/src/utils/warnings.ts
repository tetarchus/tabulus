import { LIBRARY_NAME } from '@tabulus/constants';

const LOG_PREFIX = `${LIBRARY_NAME}: `;

type OptionType = 'column' | 'table';

const WARNINGS = {
  DUPLICATE_COL_ID: (ids: string[]): string =>
    `${LOG_PREFIX}${
      ids.length
    } column IDs (${ids.toString()}) are duplicated in your columns definition. This may cause unexpected side effects. Please ensure each column has a unique ID.`,
  INVALID_OPTION: (type: OptionType, option: string): string =>
    `${LOG_PREFIX}Invalid ${type} option: ${option}. Please check your options definition for spelling errors.`,
};

export { WARNINGS };
