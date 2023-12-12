import { themes } from '@tabulus/theme';

import type { ThemeBorders } from './borders';
import type { ThemeColors } from './colors';
import type { ThemeFont } from './font';
import type { DeepPartial } from 'ts-essentials';

interface Theme {
  borders: ThemeBorders;
  colors: ThemeColors;
  font: ThemeFont;
}

/** Full/Partial custom theme that can be passed in as an option. */
interface CustomTheme extends DeepPartial<Theme> {
  /** The built-in theme to use as a fall-back if a property is not defined. */
  baseTheme: keyof typeof themes;
}

export type { CustomTheme, Theme };
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
} from './borders';
