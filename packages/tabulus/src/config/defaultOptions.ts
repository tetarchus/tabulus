import { defaultColumnConfig } from './defaultColumnConfig';

import type { TabulusOptions } from '@tabulus/types';

const defaultOptions: TabulusOptions = {
  //== Layout =========================
  horizontalAlign: 'center',
  //== Columns ========================
  columnDefaults: defaultColumnConfig,
  //== History ========================
  history: true,
  historySize: 10,
  //== Style ==========================
  theme: 'standard',
};

export { defaultOptions };
