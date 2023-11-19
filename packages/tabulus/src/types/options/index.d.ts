import type { TableColumnOptions } from './column';
import type { TableLayoutOptions } from './layout';
import type { DeepPartial } from 'ts-essentials';

interface TabulusOptions extends TableLayoutOptions, TableColumnOptions {}

type TabulusCustomOptions = DeepPartial<TabulusOptions>;

export type { TabulusCustomOptions, TabulusOptions };
