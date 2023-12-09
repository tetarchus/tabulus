import type { BaseProps, DevToolMode, WindowPosition, WindowSize } from '@devtools/types';

/** Props for the ResizeHandleHorizontal styled component. */
interface ResizeHandleHorizontalProps {
  /** Whether the resize handle is active and can be used to resize the window. */
  active: boolean;
  /** The edge the resize handle is for. */
  edge: 'left' | 'right';
}

/** Props for the ResizeHandleVertical styled component. */
interface ResizeHandleVerticalProps extends Pick<ResizeHandleHorizontalProps, 'active'> {
  /** The edge the resize handle is for. */
  edge: 'bottom' | 'top';
}

/** Props for the DevToolContainer styled component. */
interface DevToolContainerProps {
  /** The position of the window. */
  position: WindowPosition;
  /** The current window mode. */
  mode: DevToolMode;
  /** The current window size. */
  windowSize: WindowSize;
}

/** Props for the DevToolWindow component. */
interface DevToolWindowProps extends BaseProps {}

export type {
  DevToolContainerProps,
  DevToolWindowProps,
  ResizeHandleHorizontalProps,
  ResizeHandleVerticalProps,
};
