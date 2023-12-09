import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { setWindowPosition } from '@devtools/utils';

import type {
  DevToolContainerProps,
  ResizeHandleHorizontalProps,
  ResizeHandleVerticalProps,
} from './types';
import type { CSSObject } from '@emotion/styled';
import type { CSSProperties } from 'react';

/**
 * Container around the main DevTool window with animated resize/show/hide.
 */
const DevToolContainer = styled(motion.div)<DevToolContainerProps>`
  background-color: ${({ theme }): CSSProperties['backgroundColor'] => theme.colors.dark};
  box-sizing: border-box;
  color: ${({ theme }): CSSProperties['color'] => theme.colors.light};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
  z-index: 99999999;

  ${({ position, windowSize }): CSSObject => setWindowPosition(position, windowSize)};
`;

/**
 * Wrapper around all content of the window.
 */
const WindowContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
`;

/**
 * Wrapper around the content for display.
 */
const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  width: 100%;
`;

/**
 * Positioning wrapper around the window content and the horizontal resize handles.
 */
const HorizontalResizePositioner = styled.div`
  box-sizing: border-box;
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
`;

/**
 * A handle for resizing the window horizontally.
 */
const ResizeHandleHorizontal = styled.div<ResizeHandleHorizontalProps>`
  /* background-color: red; */
  cursor: ${({ active }): CSSProperties['cursor'] => (active ? 'ew-resize' : 'default')};
  height: 100%;
  position: absolute;
  width: 0.2rem;
  z-index: 2;

  ${({ edge }): CSSObject => ({ [edge]: 0 })};
`;

/**
 * A handle for resizing the window vertically.
 */
const ResizeHandleVertical = styled.div<ResizeHandleVerticalProps>`
  /* background-color: green; */
  cursor: ${({ active }): CSSProperties['cursor'] => (active ? 'ns-resize' : 'default')};
  height: 0.2rem;
  position: absolute;
  width: 100%;
  z-index: 2;

  ${({ edge }): CSSObject => ({ [edge]: 0 })};
`;

export {
  Content,
  DevToolContainer,
  HorizontalResizePositioner,
  ResizeHandleHorizontal,
  ResizeHandleVertical,
  WindowContent,
};
