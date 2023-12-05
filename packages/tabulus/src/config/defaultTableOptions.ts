import { IS } from '@tabulus/constants';

import { globalDefaultColumnOptions } from './defaultColumnOptions';

import type { TabulusCompleteOptions } from '@tabulus/types';

const globalDefaultTableOptions: TabulusCompleteOptions = {
  //== Debug ==========================
  debugInvalidOptions: IS.PROD ? false : true,
  //== Columns ========================
  columnDefaults: globalDefaultColumnOptions,
  //== Layout =========================
  horizontalAlign: 'center',
  //== Theme ==========================
  theme: 'standard',
};

export { globalDefaultTableOptions };
