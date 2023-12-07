import { objectEntries } from '@tetarchus/utils';

import type { MaximisedPosition, MinimisedPosition, WindowPosition } from '@devtools/types';

const STATE_KEY = '__TABULUS_DEVTOOLS_';

const POSITIONS_MIN = {
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
} satisfies Record<string, MinimisedPosition>;

const POSITIONS_MAX = {
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
} satisfies Record<string, MaximisedPosition>;

const POSITIONS = {
  ...POSITIONS_MAX,
  ...POSITIONS_MIN,
} satisfies Record<string, WindowPosition>;

const POSITIONS_MAX_ARR = objectEntries(POSITIONS_MAX).map(([_key, value]) => value);
const POSITIONS_MIN_ARR = objectEntries(POSITIONS_MIN).map(([_key, value]) => value);

export { POSITIONS, POSITIONS_MAX_ARR, POSITIONS_MIN_ARR, STATE_KEY };
