import type { DeepPartial } from 'ts-essentials';

interface TabulusOptions {
  /** How to align the table within its parent. */
  align: 'center' | 'left' | 'right';
}

type TabulusCustomOptions = DeepPartial<TabulusOptions>;

export type { TabulusCustomOptions, TabulusOptions };
