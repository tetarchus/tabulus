import { arrayIncludes } from '@tetarchus/utils';

import { POSITIONS_HOZ_ARR, POSITIONS_VERT_ARR } from '@tabulus/constants/devtool';

import { getPositionParts, setMaximisedPosition, setMinimisedPosition } from './position';

import type {
  DevToolMode,
  DevToolSettings,
  DevToolState,
  WindowPosition,
} from '@tabulus/types/devtool';
import type { MotionProps, Target, TargetAndTransition } from 'framer-motion';

/**
 * Sets the transform origin settings for an animation.
 * @param position The position of the window.
 * @returns The transform origin settings.
 */
const setTransformOrigin = (position: WindowPosition) => ({
  transformOrigin: getPositionParts(position).join(' '),
});

/**
 * Generates the animation props for the main window to transition between modes.
 * @param mode The current mode.
 * @param settings The settings object for the DevTool.
 * @returns Props that can be passed to Framer Motion components to animate properties.
 */
const createWindowAnimation = (
  mode: DevToolMode,
  previousState: DevToolState,
  settings: DevToolSettings,
): MotionProps => {
  const { mode: previousMode, settings: oldSettings } = previousState;
  const {
    maximisedPosition,
    minimisedPanelHeight,
    minimisedPanelWidth,
    minimisedPosition,
    panelSize,
  } = settings;
  const {
    maximisedPosition: previousMaxPosition,
    minimisedPanelHeight: previousHeight,
    minimisedPanelWidth: previousWidth,
    minimisedPosition: previousMinPosition,
    panelSize: previousSize,
  } = oldSettings;

  const transformOrigin = setTransformOrigin(
    mode === 'max' ? maximisedPosition : minimisedPosition,
  );

  const [x] = getPositionParts(minimisedPosition);
  const mainAxis = mode === 'max' ? maximisedPosition : x;

  const previousPosition =
    previousMode === 'max'
      ? setMaximisedPosition(previousMaxPosition, {
          x: arrayIncludes(POSITIONS_HOZ_ARR, previousMaxPosition) ? previousSize : 0,
          y: arrayIncludes(POSITIONS_VERT_ARR, previousMaxPosition) ? previousSize : 0,
        })
      : setMinimisedPosition(previousMinPosition, { x: previousWidth, y: previousHeight });

  const newPosition =
    mode === 'max'
      ? setMaximisedPosition(maximisedPosition, {
          x: arrayIncludes(POSITIONS_HOZ_ARR, maximisedPosition) ? panelSize : 0,
          y: arrayIncludes(POSITIONS_VERT_ARR, maximisedPosition) ? panelSize : 0,
        })
      : setMinimisedPosition(minimisedPosition, {
          x: minimisedPanelWidth,
          y: minimisedPanelHeight,
        });

  const exit = { [mainAxis]: '-100%' };
  // TODO: Fix casting?
  const initial = (previousMode === mode ? exit : previousPosition) as Target;
  const animate = newPosition as unknown as TargetAndTransition;

  return {
    animate,
    exit,
    initial,
    style: transformOrigin,
  };
};

export { createWindowAnimation, setTransformOrigin };
