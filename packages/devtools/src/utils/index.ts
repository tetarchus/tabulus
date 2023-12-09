export { createWindowAnimation, setTransformOrigin } from './animate';
export {
  getPositionParts,
  isMaximisedPosition,
  isMinimisedPosition,
  setMaximisedPosition,
  setMinimisedPosition,
  setWindowPosition,
} from './position';
export { initState, resetState, stateActions } from './state';
export { createGlobalStyle, styled, ThemeProvider } from './styled';
export { calculateWindowSize, determineActiveResizeEdges } from './window';

export type { CSSObject } from './styled';
