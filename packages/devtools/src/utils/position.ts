import { arrayIncludes } from '@tetarchus/utils';

import { POSITIONS_MAX_ARR, POSITIONS_MIN_ARR } from '@devtools/constants';

import type { MaximisedPosition, MinimisedPosition, WindowPosition } from '@devtools/types';
import type { CSSObject } from '@emotion/react';

const getMinimisedPosition = (position: MinimisedPosition): CSSObject => {
  const [x, y] = position.split('-') as Array<MaximisedPosition>;

  return x && y
    ? {
        [x]: 0,
        [y]: 0,
      }
    : {};
};

const getMaximisedPosition = (position: MaximisedPosition): CSSObject => {
  const positionValues: CSSObject = {};

  if (position === 'right') {
    positionValues.right = '0%';
  } else {
    positionValues.left = '0%';
  }

  if (position === 'bottom') {
    positionValues.bottom = '0%';
  } else {
    positionValues.top = '0%';
  }

  if (position === 'bottom' || position === 'top') {
    positionValues.height = '15rem';
    positionValues.width = '100%';
  } else {
    positionValues.height = '100vh';
    positionValues.width = '15rem';
  }

  return positionValues;
};

const isMaximisedPosition = (position: WindowPosition): position is MaximisedPosition =>
  arrayIncludes(POSITIONS_MAX_ARR, position);

const isMinimisedPosition = (position: WindowPosition): position is MinimisedPosition =>
  arrayIncludes(POSITIONS_MIN_ARR, position);

export { getMaximisedPosition, getMinimisedPosition, isMaximisedPosition, isMinimisedPosition };
