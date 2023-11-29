import type { CSSProperties } from 'react';

// TODO: For some definitions, include a function that gets passed
// - Cell Index
// - Cell Value
// - Other relevant info
// and determines whether to display a border (and/or the styles of that border)

/**
 * Basic options for where to display borders on a component.
 * - `all`: Display borders on all sides of the component.
 * - `between`: Display borders between components only, and not on extreme edges.
 * - `none`: Display no borders on the component.
 */
type BorderOptions = 'all' | 'between' | 'none';

/** Components that can have border setting overrides. */
type BorderComponents = 'cells' | 'columns' | 'header' | 'headerCells' | 'rows' | 'table';

/**
 * Standard border style definitions. These can be used to override more general values.
 */
interface BorderStyles {
  /** The color to use for the border. */
  color?: NonNullable<CSSProperties['borderColor']>;
  /** The style to use for the border. */
  style?: NonNullable<CSSProperties['borderStyle']>;
  /** The width to use for the border. */
  width?: NonNullable<CSSProperties['borderWidth']>;
}

/**
 * Alias for properties that may either have the individual border properties defined
 * (color, style, width), or a value of `none` to display no border.
 */
type OptionalBorderStyles = BorderStyles | 'none';

/**
 * Border definitions for individual sides of a component.
 */
interface BorderIndividualSides {
  /** Styles to use for the bottom border. */
  bottom?: OptionalBorderStyles;
  /** Styles to use for the left border. */
  left?: OptionalBorderStyles;
  /** Styles to use for the right border. */
  right?: OptionalBorderStyles;
  /** Styles to use for the top border. */
  top?: OptionalBorderStyles;
}

/**
 * Alias for border properties that may have a single {@link BorderOptions|string} option, or
 * each {@link BorderIndividualSides|side} defined separately.
 */
type BorderSides = BorderOptions | BorderIndividualSides;

/**
 * Definition for component overrides that may have definitions for all borders, or individual
 * sides.
 */
interface Borders extends BorderStyles {
  sides?: BorderSides;
}

/** Definitions for borders across the table. */
interface ThemeBorders extends Partial<Record<BorderComponents, Borders>> {
  /**
   * Whether to display all borders, those between components, or no borders on all components.
   * These can be overridden on a per-component basis, but will apply for any that are not defined.
   */
  borderSides?: BorderSides;
  /** The `borderStyle` to use for all components unless overridden. */
  borderStyle?: NonNullable<CSSProperties['borderStyle']>;
  /** The `borderWidth` to use for all components unless overridden. */
  borderWidth?: NonNullable<CSSProperties['borderWidth']>;

  // //== Component Overrides ============
  // /**
  //  * Border option overrides for cell components. Will also apply to header cells unless
  //  * the `headerCells` override is provided.
  //  */
  // cells?: Borders;
  // /** Border option overrides for columns. */
  // columns?: Borders;
  // /** Border option overrides for the header wrapper. */
  // header?: Borders;
  // /** Border option overrides for header cells. */
  // headerCells?: Borders;
  // /** Border option overrides for rows. */
  // rows?: Borders;
  // /** Border option overrides for the table component. */
  // table?: Borders;
}

export type { BorderComponents, BorderOptions, ThemeBorders };
