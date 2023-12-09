import type {
  DevToolMode,
  DevToolSettings,
  ResizeEdgeConfig,
  WindowPosition,
  WindowSize,
} from '@devtools/types';

/**
 * Determines which edges of the window should be able to be resized.
 * @param mode The current window mode.
 * @param position The current window postition.
 * @returns The edges that should have resize edges active.
 */
const determineActiveResizeEdges = (
  mode: DevToolMode,
  position: WindowPosition,
): ResizeEdgeConfig => {
  const resizeEdgeConfig: ResizeEdgeConfig = {
    bottom: false,
    left: false,
    right: false,
    top: false,
  };

  if ((mode === 'max' && position === 'top') || (mode === 'min' && position.includes('top-'))) {
    resizeEdgeConfig.bottom = true;
  }
  if (
    (mode === 'max' && position === 'bottom') ||
    (mode === 'min' && position.includes('bottom-'))
  ) {
    resizeEdgeConfig.top = true;
  }

  if ((mode === 'max' && position === 'left') || (mode === 'min' && position.includes('-left'))) {
    resizeEdgeConfig.right = true;
  }

  if ((mode === 'max' && position === 'right') || (mode === 'min' && position.includes('-right'))) {
    resizeEdgeConfig.left = true;
  }

  return resizeEdgeConfig;
};

/**
 * Calculates which window size values should be set.
 * @param mode The current window mode.
 * @param settings The settings object from state.
 * @returns The window size values.
 */
const calculateWindowSize = (mode: DevToolMode, settings: DevToolSettings): WindowSize => {
  const windowSize: WindowSize = { x: 0, y: 0 };
  const { maximisedPosition, minimisedPanelHeight, minimisedPanelWidth, panelSize } = settings;
  if (mode === 'max') {
    if (['bottom', 'top'].includes(maximisedPosition)) {
      windowSize.y = panelSize;
    } else {
      windowSize.x = panelSize;
    }
  } else {
    windowSize.x = minimisedPanelWidth;
    windowSize.y = minimisedPanelHeight;
  }
  return windowSize;
};

export { calculateWindowSize, determineActiveResizeEdges };
