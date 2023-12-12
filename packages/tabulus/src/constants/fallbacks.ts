/**
 * Fallback values to use when not explicitly set in options.
 * @namespace
 * @private
 */
const FALLBACKS = {
  /** Fallbacks for the theme. */
  THEME: {
    /** Border fallbacks for theme. */
    BORDER: {
      /** Fallback collapse setting for borders. */
      borderCollapse: 'collapse',
      /** Fallback color for borders. */
      borderColor: 'currentColor',
      /** Fallback border spacing setting for borders. */
      borderSpacing: 0,
      /** Fallback style for borders. */
      borderStyle: 'solid',
      /** Fallback width for borders. */
      borderWidth: '1px',
      /** Fallback for the sides to display borders. */
      sides: 'all',
    },
  },
} as const;

export { FALLBACKS };
