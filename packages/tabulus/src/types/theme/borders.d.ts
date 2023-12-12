import type { BORDER_EDGES, BORDER_PROPERTIES } from '@tabulus/constants';
import type { CSSProperties } from 'react';

/**
 * Basic options for where to display borders on a component.
 * - `all`: Display borders on all sides of the component.
 * - `between`: Display borders between components only, and not on extreme edges.
 * - `none`: Display no borders on the component.
 */
type BorderOptions = 'all' | 'between' | 'external' | 'none';

/** Components that can have border setting overrides. */
type BorderComponents = 'cell' | 'column' | 'header' | 'headerCell' | 'row' | 'table';

/** Components that can have border styles, including cell spacing. */
type BorderComponentsPlus = BorderComponents | 'rows';

/** Edges of a component that can have borders. */
type BorderEdges = (typeof BORDER_EDGES)[number];

/** The standard properties to set on a border. */
type BorderProperties = (typeof BORDER_PROPERTIES)[number];

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
interface BorderIndividualSides extends Partial<Record<BorderEdges, OptionalBorderStyles>> {}

/**
 * Alias for border properties that may have a single {@link BorderOptions|string} option, or
 * each {@link BorderIndividualSides|side} defined separately.
 */
type BorderSides = BorderOptions | BorderIndividualSides;

/** Object for defining separate cell spacing values for horizontal/vertical spacing. */
interface BorderSpacing {
  /** Spacing between rows. */
  horizontal: CSSProperties['rowGap'];
  /** Spacing between columns. */
  vertical: CSSProperties['columnGap'];
}

/**
 * A set of values that can be defined against a {@link BorderComponents|BorderComponent} or
 * globally.
 */
interface BorderDefinition {
  /** Whether cells in the table should have separate borders, or collapse borders next to each
   * other down into a single border. Works similarly to `border-collapse` on a `<table>`. */
  borderCollapse?: 'collapse' | 'separate';
  /** The color of the border. */
  borderColor?: NonNullable<CSSProperties['borderColor']>;
  /** Configuration for the sides of the component to display borders on. */
  borderSides?: BorderSides;
  /** When `borderCollapse` is `'separate'`, the spacing between rows/columns. */
  borderSpacing?: 'none' | CSSProperties['rowGap'] | BorderSpacing;
  /** The `borderStyle` to for the borders. */
  borderStyle?: NonNullable<CSSProperties['borderStyle']>;
  /** The `borderWidth` to use for the borders. */
  borderWidth?: NonNullable<CSSProperties['borderWidth']>;
}

/** Required fallback values to use when no more specific values exist. */
interface BorderStyleFallbacks {
  /** The borderCollapse option to use as a fallback. */
  borderCollapse: NonNullable<BorderDefinition['borderCollapse']>;
  /** The borderSides option to use as a fallback. */
  borderSides: NonNullable<BorderDefinition['borderSides']>;
  /** The borderSpacing option to use as a fallback. */
  borderSpacing: NonNullable<BorderDefinition['borderSpacing']>;
  /** Definition for a bottom border to use as a fallback. */
  bottomBorder: Required<BorderStyles>;
  /** Definition for a left border to use as a fallback. */
  leftBorder: Required<BorderStyles>;
  /** Definition for a right border to use as a fallback. */
  rightBorder: Required<BorderStyles>;
  /** Definition for a top border to use as a fallback. */
  topBorder: Required<BorderStyles>;
}

/**
 * A mapping object that defines what values to use for borders on a component based on the
 * values of certain options.
 */
interface BorderMap {
  /** Whether the component should have the borderSpacing value applied and in which axis. */
  applyBorderSpacing: 'both' | 'horizontal' | 'none' | 'vertical';
  /** Edges that should have a border when borderCollapse === 'collapse'. */
  collapseEdges: BorderEdges[];
  /** When collapsing edges, whether to remove the border for first/last-of-type. */
  collapseSkip: 'first' | 'last' | 'none';
  /** Edges to display when displaying external edges. */
  externalEdges: BorderEdges[];
  /** Values to fall back to if specific values for the component are not defined. */
  fallbacks: BorderComponents[];
  /** Edges to display when displaying internal edges. */
  internalEdges: BorderEdges[];
  /** The name of the {@link ThemeBorders} property containing the values for this component. */
  main: BorderComponents;
  /** Edges that should have a border when borderCollapse === 'separate'. */
  separateEdges: BorderEdges[];
}

/** Theme border definitions that allow for global or specific values to be set. */
interface ThemeBorders extends Partial<Record<BorderComponents, BorderDefinition>> {
  /** The global fallback definition. Used for any component that doesn't have a specific value,
   * or fallback value set. */
  all: BorderDefinition;
}

export type {
  BorderComponents,
  BorderComponentsPlus,
  BorderDefinition,
  BorderEdges,
  BorderMap,
  BorderOptions,
  BorderProperties,
  BorderSides,
  BorderSpacing,
  BorderStyleFallbacks,
  BorderStyles,
  ThemeBorders,
};
