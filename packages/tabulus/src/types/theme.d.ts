import type { themes } from '@tabulus/theme';
import type { DeepPartial } from 'ts-essentials';

/** Table theme definition that will be used to set various style elements on the table. */
interface Theme {}

/** Full/Partial custom theme that can be passed in as an option. */
interface CustomTheme extends DeepPartial<Theme> {
  /** The built-in theme to use as a fall-back if a property is not defined. */
  baseTheme?: keyof typeof themes;
}

export type { CustomTheme, Theme };
