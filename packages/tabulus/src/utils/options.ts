import type { TabulusOptions } from '@tabulus/types';
import type { DeepPartial } from 'ts-essentials';

// import { objectKeys } from './object';

// const validateOptions = (options: DeepPartial<TabulusOptions>): void => {};

// const warnOnDeprecatedOptions = (options: DeepPartial<TabulusOptions>): void => {};

const createTableOptions = (
  _tableOptions: DeepPartial<TabulusOptions>,
  defaults: TabulusOptions,
): TabulusOptions => {
  // validateOptions(tableOptions);
  // warnOnDeprecatedOptions(tableOptions);

  // FIXME
  return defaults;
};

export { createTableOptions };
