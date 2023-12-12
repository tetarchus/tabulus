import type { CSSProperties } from 'react';

// TODO: Theme to allow for functions to determine font size?

type FontFamily = NonNullable<CSSProperties['fontFamily']>;

/** Font Family definition object for separate header/body fonts. */
interface FontFamilyDefinition {
  header: FontFamily;
  table: FontFamily;
}

interface ThemeFont {
  /** Font base-size override for the table. If not defined, will inherit from the document. */
  baseSize?: `${number}px`;
  /** Font family override for the table. If not defined, will inherit from the document. */
  fontFamily?: FontFamily | FontFamilyDefinition;
}

export type { ThemeFont };
