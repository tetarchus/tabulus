import { PREFIX } from './tabulus';

/**
 * Classes assigned to components within the table to allow for selecting and styling
 * with standard CSS.
 * @namespace
 * @private
 */
const CLASSES = {
  /** Class for the wrapper around the main table. */
  BASE: PREFIX,
  /** Classes for the main table body. */
  BODY: {
    /** Class for the main table body container. */
    BASE: `${PREFIX}-body`,
  },
  /** Classes for the column header elements. */
  COLUMN: {
    /** Class for the column header cell. */
    BASE: `${PREFIX}-col`,
    /** Class for the column title. */
    TITLE: `${PREFIX}-col-title`,
  },
  /** Classes for the table header elements. */
  HEADER: {
    /** Class for the table header container. */
    BASE: `${PREFIX}-head`,
    /** Class for the table header row. */
    ROW: `${PREFIX}-head-row`,
  },
  /** Classes for the table row elements. */
  ROW: {
    /** Class for all table row elements. */
    BASE: `${PREFIX}-row`,
    /** Class for even table row elements. */
    EVEN: `${PREFIX}-row-even`,
    /** Class for odd table row elements. */
    ODD: `${PREFIX}-row-odd`,
  },
  /** Class for the main table element. */
  TABLE: `${PREFIX}-table`,
} as const;

export { CLASSES };
