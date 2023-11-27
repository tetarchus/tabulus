import type { CustomTheme, Theme } from '../theme';
import type { themes } from '@tabulus/theme';

/** Table options relating to the look and styling of the table. */
interface TableStyleOptions {
  /**
   * The theme to style the table with. Can be either the name of a pre-defined theme, or a custom
   * theme definition.
   * @default 'standard'
   */
  theme: keyof typeof themes | CustomTheme | Theme;
}

export type { TableStyleOptions };
