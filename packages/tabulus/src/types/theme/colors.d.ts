import { CSSProperties } from 'react';

/** Definitions of the main colors used around the table. */
interface ThemeColors {
  /**
   * The background color of the table. If no row-specific color is used, then they will be
   * transparent, and this color will show through.
   */
  backgroundColor: NonNullable<CSSProperties['backgroundColor']>;
  /**
   * The main border color for all borders on the table, unless overridden. This will fall back
   * to the text color if not provided.
   */
  borderColor?: NonNullable<CSSProperties['borderColor']>;
  /**
   * The main text color for the table. This will be used for all cells unless overridden by
   * a more specific value, and will also be used as the fallback for borders.
   */
  textColor: NonNullable<CSSProperties['color']>;
}

export type { ThemeColors };
