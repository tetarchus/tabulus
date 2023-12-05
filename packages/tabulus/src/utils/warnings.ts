import { LIBRARY_NAME } from '@tabulus/constants';

// TODO: Move to types
type OptionType = 'column' | 'table';

// TODO: CLEAN UP AND MAKE BETTER

/**
 * Prefix to add to the start of log messages.
 * @private
 */
const LOG_PREFIX = `${LIBRARY_NAME}: `;

/**
 * Assembles a warning message to display to the user.
 * @param message The message to log.
 * @returns The message with the {@link LOG_PREFIX} prepended.
 */
const printWarning = (message: string): string => `${LOG_PREFIX}${message}`;

/**
 * Object containing the various warning messages that could be displayed to a user.
 */
const WARNINGS = {
  DUPLICATE_COL_ID: (ids: string[]): string =>
    printWarning(
      `${
        ids.length
      } column IDs (${ids.toString()}) are duplicated in your columns definition. This may cause unexpected side effects. Please ensure each column has a unique ID.`,
    ),
  INVALID_OPTION: (type: OptionType, option: string): string =>
    printWarning(
      `Invalid ${type} option: ${option}. Please check your options definition for spelling errors.`,
    ),
};

export { WARNINGS };
