import { startCase } from 'lodash-es';
import invariant from 'tiny-invariant';

import { FALLBACKS } from '@tabulus/constants';

import { isBorderOptionString } from '../typeguards';

import type { CSSObject } from '../styled';
import type { Theme } from '@tabulus/types';

// TODO: Move this to a re-usable location
const BORDER_SIDES = ['bottom', 'left', 'right', 'top'] as const;

/**
 *
 * @param theme The theme being used for the table.
 * @param borderType The type of border being set.
 * @returns A CSS definition for borders.
 */
const setBorderCss = (
  theme: Theme,
  borderType: 'cells' | 'columns' | 'header' | 'headerCells' | 'rows' | 'table',
): CSSObject => {
  //== Return Value Storage ===========
  const borderDefinition: CSSObject = {};

  //== Theme Value Extraction =========
  const { borders, colors } = theme;
  const {
    borderSides: globalBorderSides = FALLBACKS.CSS.BORDER.sides,
    borderStyle,
    borderWidth,
    [borderType]: componentBorders,
  } = borders;
  const {
    sides: componentBorderSides,
    color: componentBorderColor,
    style: componentBorderStyle,
    width: componentBorderWidth,
  } = componentBorders ?? {};
  const borderSides = componentBorderSides ?? globalBorderSides;

  // TODO:
  // cells: Right-hand border only (depend on cell value)
  // columns:
  // headerCells between only
  // header: Bottom border only
  // rows: Bottom border only
  // table: If between - as the main border style -> No borders

  //== CSS Value Setting ==============
  if (isBorderOptionString(borderSides)) {
    switch (borderSides) {
      case 'all':
      case 'between':
        borderDefinition.borderColor =
          componentBorderColor ?? colors.borderColor ?? FALLBACKS.CSS.BORDER.borderColor;
        borderDefinition.borderStyle =
          componentBorderStyle ?? borderStyle ?? FALLBACKS.CSS.BORDER.borderStyle;
        borderDefinition.borderWidth =
          componentBorderWidth ?? borderWidth ?? FALLBACKS.CSS.BORDER.borderWidth;
        break;
      case 'none':
        borderDefinition.borderStyle = 'none';
        break;
      // No default -- exhaustive
    }
  } else {
    for (const side of BORDER_SIDES) {
      const sideDefinition = borderSides[side];
      if (typeof sideDefinition === 'string' && sideDefinition === 'none') {
        borderDefinition[`border${startCase(side)}Style`] = 'none';
      } else {
        invariant(typeof sideDefinition !== 'string', 'Unrecognised borderSide value.');

        borderDefinition[`border${startCase(side)}Color`] =
          sideDefinition?.color ??
          componentBorderColor ??
          colors.borderColor ??
          FALLBACKS.CSS.BORDER.borderColor;
        borderDefinition[`border${startCase(side)}Style`] =
          sideDefinition?.style ??
          componentBorderStyle ??
          borderStyle ??
          FALLBACKS.CSS.BORDER.borderStyle;
        borderDefinition[`border${startCase(side)}Width`] =
          sideDefinition?.width ??
          componentBorderWidth ??
          borderWidth ??
          FALLBACKS.CSS.BORDER.borderWidth;
      }
    }
  }

  //== CSS Return =====================
  return borderDefinition;
};

export { setBorderCss };
