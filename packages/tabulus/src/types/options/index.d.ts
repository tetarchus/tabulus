import type { TableColumnOptions } from './column';
import type { DebuggingOptions } from './debug';
import type { TableLayoutOptions } from './layout';
import type { TableRowOptions } from './row';
import type { TableStyleOptions } from './theme';
import type { DeepPartial } from 'ts-essentials';

/** All available options that can be passed to a table. */
interface TabulusCompleteOptions
  extends DebuggingOptions,
    TableColumnOptions,
    TableLayoutOptions,
    TableRowOptions,
    TableStyleOptions {}

/** Table options passed in as overrides to the defaults. */
interface TabulusOptions extends Omit<DeepPartial<TabulusCompleteOptions>, 'theme'> {
  /** The theme to use for the table.
   *
   * ---
   * Note: {@link Theme} cannot be deep partial, so left out of standard inheritance.
   */
  theme?: TabulusCompleteOptions['theme'];
}

export type { TabulusCompleteOptions, TabulusOptions };
export type { TableColumnOptions } from './column';
