import { arrayIncludes, fromEntries } from '@tetarchus/utils';

import {
  POSITIONS,
  POSITIONS_MAX_ARR,
  POSITIONS_MIN_ARR,
  POSITIONS_VERT_ARR,
} from '@devtools/constants';

import type {
  MaximisedPosition,
  MinimisedPosition,
  WindowPosition,
  WindowSize,
} from '@devtools/types';
import type { CSSObject } from '@devtools/utils';

/**
 * Typeguard to check whether the given position contains a valid position for maximised windows.
 * @param position The window position value to check.
 * @returns Whether the position value is a {@link MaximisedPosition}.
 */
const isMaximisedPosition = (position: WindowPosition): position is MaximisedPosition =>
  arrayIncludes(POSITIONS_MAX_ARR, position);

/**
 * Typeguard to check whether the given position contains a valid position for minimised windows.
 * @param position The window position value to check.
 * @returns Whether the position value is a {@link MinimisedPosition}.
 */
const isMinimisedPosition = (position: WindowPosition): position is MinimisedPosition =>
  arrayIncludes(POSITIONS_MIN_ARR, position);

/**
 * Split a {@link WindowPosition} into the X and Y positions.
 * @param position The position to split.
 * @returns The X and Y position names based on the input {@link MinimisedPosition}.
 */
const getPositionParts = (position: WindowPosition): [MaximisedPosition, MaximisedPosition] => {
  const [y, x] = position.split('-') as Array<MaximisedPosition>;
  return [x ?? POSITIONS.LEFT, y ?? POSITIONS.TOP];
};

/**
 * Sets CSS values to position and size the maximised window correctly.
 * @param position The maximisedPosition value.
 * @param windowSize The current size of the window.
 * @returns A {@link CSSObject} containing the CSS values to set the window size/position.
 */
const setMaximisedPosition = (
  position: MaximisedPosition,
  windowSize?: WindowSize | undefined,
): CSSObject => {
  const positionValues: CSSObject = {};

  positionValues[position] = '0%';
  position === 'right' ? (positionValues.left = 'initial') : (positionValues.left = '0%');
  position === 'bottom' ? (positionValues.top = 'initial') : (positionValues.top = '0%');

  if (arrayIncludes(POSITIONS_VERT_ARR, position)) {
    windowSize && (positionValues.height = windowSize.y);
    positionValues.width = '100%';
  } else {
    positionValues.height = '100%';
    windowSize && (positionValues.width = windowSize.x);
  }

  return positionValues;
};

/**
 * Sets CSS values to position and size the minimised window correctly.
 * @param position The closedPosition/minimisedPosition value.
 * @param windowSize The current size of the window.
 * @returns A {@link CSSObject} containing the CSS values to set the window size/position.
 */
const setMinimisedPosition = (
  position: MinimisedPosition,
  windowSize?: WindowSize | undefined,
): CSSObject => {
  const [x, y] = getPositionParts(position);
  const allProps = fromEntries(
    POSITIONS_MAX_ARR.map(pos => [pos, x === pos || y === pos ? 0 : 'initial']),
  );

  return {
    ...allProps,
    // [x]: 0,
    // [y]: 0,
    ...(windowSize
      ? {
          height: `${windowSize.y}px`,
          width: `${windowSize.x}px`,
        }
      : {}),
  };
};

/**
 * Sets CSS values to position and size the window correctly.
 * @param position The value of the position for the current mode.
 * @param windowSize The current window size setting.
 * @returns A {@link CSSObject} containing the CSS values to set the window size/position.
 */
const setWindowPosition = (
  position: WindowPosition,
  windowSize?: WindowSize | undefined,
): CSSObject =>
  isMaximisedPosition(position)
    ? setMaximisedPosition(position, windowSize)
    : setMinimisedPosition(position, windowSize);

export {
  getPositionParts,
  isMaximisedPosition,
  isMinimisedPosition,
  setMaximisedPosition,
  setMinimisedPosition,
  setWindowPosition,
};
