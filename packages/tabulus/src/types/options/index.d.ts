import type { TableColumnOptions } from './column';
import type { TableHistoryOptions } from './history';
import type { TableLayoutOptions } from './layout';
import type { TableStyleOptions } from './styles';
import type { DeepPartial } from 'ts-essentials';

/** All options that can be set on the table to control how it looks and operates. */
interface TabulusOptions
  extends TableColumnOptions,
    TableHistoryOptions,
    TableLayoutOptions,
    TableStyleOptions {}

/** The custom options object that can be passed in as a prop. Any values not set will fall back
 * to globally set defaults. */
type TabulusCustomOptions = DeepPartial<TabulusOptions>;

export type { TabulusCustomOptions, TabulusOptions };
