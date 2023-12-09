import { objectEntries } from '@tetarchus/utils';

import type {
  DevToolPage,
  MaximisedPosition,
  MinimisedPosition,
  WindowPosition,
} from '@devtools/types';

/** The key to store the state data in local storage. */
const STATE_KEY = '__TABULUS_DEVTOOLS_';

/** Positions enum for maximised mode. */
const POSITIONS_MAX = {
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
} satisfies Record<string, MaximisedPosition>;

/** Positions enum for closed/minimised mode. */
const POSITIONS_MIN = {
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
} satisfies Record<string, MinimisedPosition>;

/** Positions enum for all modes. */
const POSITIONS = {
  ...POSITIONS_MAX,
  ...POSITIONS_MIN,
} satisfies Record<string, WindowPosition>;

/** Array of position values for maximised mode. */
const POSITIONS_MAX_ARR = objectEntries(POSITIONS_MAX).map(([_key, value]) => value);

/** Array of position values for minimised mode. */
const POSITIONS_MIN_ARR = objectEntries(POSITIONS_MIN).map(([_key, value]) => value);

const POSITIONS_HOZ_ARR = ['left', 'right'] as const;

const POSITIONS_VERT_ARR = ['bottom', 'top'] as const;

/** Enum for page ID to title text value. */
const PAGES: Record<DevToolPage, string> = {
  main: 'Table List',
  table: 'Table',
  settings: 'DevTool Settings',
};

// TODO: Re-use from main lib?
// TODO: Move these consts
const FLEX_ALIGN = {
  END: 'flex-end',
  START: 'flex-start',
  STRETCH: 'stretch',
} as const;

export {
  FLEX_ALIGN,
  PAGES,
  POSITIONS,
  POSITIONS_HOZ_ARR,
  POSITIONS_MAX_ARR,
  POSITIONS_MIN_ARR,
  POSITIONS_VERT_ARR,
  STATE_KEY,
};
