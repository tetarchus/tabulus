import { defaultColumnConfig } from './defaultColumnConfig';

import type { TabulusOptions } from '@tabulus/types';

const defaultOptions: TabulusOptions = {
  //== Layout =========================
  horizontalAlign: 'center',
  //== Columns ========================
  columnDefaults: defaultColumnConfig,
};

export { defaultOptions };
