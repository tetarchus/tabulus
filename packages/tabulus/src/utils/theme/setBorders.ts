import { arrayIncludes, fromEntries } from '@tetarchus/utils';
import { startCase } from 'lodash-es';

import { BORDER_EDGES, FALLBACKS } from '@tabulus/constants';
import { BORDER_MAP } from '@tabulus/theme';
import { isBorderOptionString } from '@tabulus/utils';

import type {
  BorderComponents,
  BorderComponentsPlus,
  BorderDefinition,
  BorderEdges,
  BorderProperties,
  BorderSpacing,
  BorderStyleFallbacks,
  BorderStyles,
  Theme,
} from '@tabulus/types';
import type { CSSObject } from '@tabulus/utils';

/**
 * Get the name of a CSS property based on the edge and border property it is for.
 * @param edge The edge the property is for.
 * @param property The border property the property name is for.
 * @returns A string CSS property name for a specific border edge and property.
 */
const getStyleProperty = (edge: BorderEdges, property: BorderProperties) =>
  `border${startCase(edge)}${startCase(property)}`;

/**
 * Gets the name of the property from {@link BorderStyleFallbacks} for a specific edge.
 * @param edge The edge the property is for.
 * @returns A string for the property name in fallback values for the given edge.
 */
const getFallbackEdgeProperty = (edge: BorderEdges): `${BorderEdges}Border` => `${edge}Border`;

/**
 * Creates an object containing separate edge properties with the passed styles applied.
 * @param styles The property values to apply to all edges.
 * @returns An object containing all edges as keys with the style values assigned to them.
 */
const getBorderEdgeValues = (
  styles: Required<BorderStyles>,
): Record<`${BorderEdges}Border`, Required<BorderStyles>> => {
  const { color, style, width } = styles;
  const edges: [`${BorderEdges}Border`, Required<BorderStyles>][] = [];
  for (const edge of BORDER_EDGES) {
    edges.push([getFallbackEdgeProperty(edge), { color, style, width }]);
  }
  return fromEntries(edges);
};

/**
 *
 * @param spacing The spacing values from the theme.
 * @returns The spacing split into horizontal and vertical values.
 */
const getBorderSpacingValues = (
  spacing: NonNullable<BorderDefinition['borderSpacing']>,
): BorderSpacing => {
  const horizontal = (typeof spacing === 'object' && spacing ? spacing.horizontal : spacing) ?? 0;
  const vertical = (typeof spacing === 'object' && spacing ? spacing.vertical : spacing) ?? 0;

  return {
    horizontal,
    vertical,
  };
};

/**
 * Gets values to use for component border is no more specific values are provided. Uses
 * the {@link BORDER_MAP} to determine the fallbacks and order (more specific on the left).
 * @param theme The {@link Theme} object being used.
 * @param component The component to get the fallback values for.
 * @returns A {@link BorderStyleFallbacks|fallback} object containing values to use if no
 * more specific ones are defined.
 */
const getFallbackValues = (theme: Theme, component: BorderComponentsPlus): BorderStyleFallbacks => {
  const borderMapValue = BORDER_MAP[component];
  const { borders } = theme;
  const fallbackBorderStyle: Required<BorderStyles> = {
    color: FALLBACKS.THEME.BORDER.borderColor,
    style: FALLBACKS.THEME.BORDER.borderStyle,
    width: FALLBACKS.THEME.BORDER.borderWidth,
  };

  const fallbackValues: BorderStyleFallbacks = {
    borderCollapse: FALLBACKS.THEME.BORDER.borderCollapse,
    borderSides: 'all',
    borderSpacing: FALLBACKS.THEME.BORDER.borderSpacing,
    ...getBorderEdgeValues(fallbackBorderStyle),
  };
  const fallbacks: Array<BorderComponents | 'all'> = [...borderMapValue.fallbacks, 'all'];

  for (const fallback of fallbacks.reverse()) {
    const {
      [fallback]: {
        borderCollapse,
        borderColor,
        borderSides,
        borderSpacing,
        borderStyle,
        borderWidth,
      } = {
        borderCollapse: undefined,
        borderColor: undefined,
        borderSides: fallbackValues.borderSides,
        borderSpacing: undefined,
        borderStyle: undefined,
        borderWidth: undefined,
      },
    } = borders;

    borderCollapse && (fallbackValues.borderCollapse = borderCollapse);
    borderSpacing && (fallbackValues.borderSpacing = borderSpacing);
    borderSides && (fallbackValues.borderSides = borderSides);

    if (borderSides && isBorderOptionString(borderSides)) {
      // Assign color, style and width to all edges for now
      for (const edge of BORDER_EDGES) {
        borderColor && (fallbackValues[getFallbackEdgeProperty(edge)].color = borderColor);
        borderStyle && (fallbackValues[getFallbackEdgeProperty(edge)].style = borderStyle);
        borderWidth && (fallbackValues[getFallbackEdgeProperty(edge)].width = borderWidth);
      }
    } else {
      for (const edge of BORDER_EDGES) {
        const borderDefinition = borderSides?.[edge];
        if (borderDefinition === 'none') {
          fallbackValues[getFallbackEdgeProperty(edge)].style = 'none';
        } else if (borderDefinition) {
          const color = borderDefinition.color ?? borderColor;
          const style = borderDefinition.style ?? borderStyle;
          const width = borderDefinition.width ?? borderWidth;
          color && (fallbackValues[getFallbackEdgeProperty(edge)].color = color);
          style && (fallbackValues[getFallbackEdgeProperty(edge)].style = style);
          width && (fallbackValues[getFallbackEdgeProperty(edge)].width = width);
        } else {
          // No overrides needed
        }
      }
    }
  }

  return fallbackValues;
};

/**
 * Generates border CSS values to use for a component.
 * @param theme The {@link Theme} object being used.
 * @param component The component to generate borders for.
 * @returns A {@link CSSObject} containing the border values to use for the component.
 */
const setBorders = (theme: Theme, component: BorderComponentsPlus): CSSObject => {
  const borderStyles: CSSObject = {};
  const fallbacks = getFallbackValues(theme, component);
  const { borders } = theme;
  const {
    applyBorderSpacing,
    collapseEdges,
    collapseSkip,
    externalEdges,
    main,
    internalEdges,
    separateEdges,
  } = BORDER_MAP[component];

  const {
    [main]: {
      borderCollapse = fallbacks.borderCollapse,
      borderColor = undefined,
      borderSides = fallbacks.borderSides,
      borderSpacing = fallbacks.borderSpacing,
      borderStyle = undefined,
      borderWidth = undefined,
    } = {},
  } = borders;

  if (isBorderOptionString(borderSides)) {
    for (const edge of borderCollapse === 'collapse' ? collapseEdges : separateEdges) {
      if (
        (arrayIncludes(['all', 'between'], borderSides) && arrayIncludes(internalEdges, edge)) ||
        (arrayIncludes(['all', 'external'], borderSides) && arrayIncludes(externalEdges, edge))
      ) {
        borderStyles[getStyleProperty(edge, 'color')] =
          borderColor ?? fallbacks[getFallbackEdgeProperty(edge)].color;
        borderStyles[getStyleProperty(edge, 'style')] =
          borderStyle ?? fallbacks[getFallbackEdgeProperty(edge)].style;
        borderStyles[getStyleProperty(edge, 'width')] =
          borderWidth ?? fallbacks[getFallbackEdgeProperty(edge)].width;

        if (collapseSkip !== 'none') {
          borderStyles[`&:${collapseSkip}-of-type`] = {
            [getStyleProperty(edge, 'style')]: 'none',
          };
        }
      }
    }
  } else {
    for (const edge of borderCollapse === 'collapse' ? collapseEdges : separateEdges) {
      const borderDefinition = borderSides?.[edge];
      if (borderDefinition === 'none' || !borderDefinition) {
        borderStyles[getStyleProperty(edge, 'style')] = 'none';
      } else {
        const color = borderDefinition.color ?? fallbacks[getFallbackEdgeProperty(edge)].color;
        const style = borderDefinition.style ?? fallbacks[getFallbackEdgeProperty(edge)].style;
        const width = borderDefinition.width ?? fallbacks[getFallbackEdgeProperty(edge)].width;
        borderStyles[getStyleProperty(edge, 'color')] = color;
        borderStyles[getStyleProperty(edge, 'style')] = style;
        borderStyles[getStyleProperty(edge, 'width')] = width;
      }
    }
  }

  const borderSpacingValues = getBorderSpacingValues(borderSpacing);
  switch (applyBorderSpacing) {
    case 'both':
      borderStyles.gap = `${borderSpacingValues.vertical} ${borderSpacingValues.horizontal}`;
      break;
    case 'horizontal':
      borderStyles.gap = `0 ${borderSpacingValues.horizontal}`;
      break;
    case 'vertical':
      borderStyles.gap = `${borderSpacingValues.vertical} 0`;
      break;
    case 'none':
      break;
  }

  console.log('BORDERS', { component, fallbacks, borderStyles, borderSides });
  return borderStyles;
};

export { setBorders };
