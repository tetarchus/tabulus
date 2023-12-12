import type { Theme } from '@tabulus/types';

/** The default theme for `Tabulus` tables. */
const standard: Theme = {
  borders: {
    all: { borderSides: 'all' },
  },
  colors: {
    backgroundColor: '#CCC',
    textColor: '#000',
  },
  font: {},
};

export { standard };
