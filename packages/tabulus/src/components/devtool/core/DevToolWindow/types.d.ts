import type { TableRegister } from '@tabulus/contexts';
import type {
  BaseProps,
  BaseStyledProps,
  DevToolMode,
  WindowPosition,
  WindowSize,
} from '@tabulus/types/devtool';

/** Props for the ResizeHandleHorizontal styled component. */
interface ResizeHandleHorizontalProps {
  /** Whether the resize handle is active and can be used to resize the window. */
  $active: boolean;
  /** The edge the resize handle is for. */
  $edge: 'left' | 'right';
}

/** Props for the ResizeHandleVertical styled component. */
interface ResizeHandleVerticalProps extends Pick<ResizeHandleHorizontalProps, '$active'> {
  /** The edge the resize handle is for. */
  $edge: 'bottom' | 'top';
}

/** Props for the DevToolContainer styled component. */
interface DevToolContainerProps extends BaseStyledProps {
  /** The position of the window. */
  position: WindowPosition;
  /** The current window mode. */
  mode: DevToolMode;
  /** The current window size. */
  windowSize: WindowSize;
}

/** Props for the DevToolWindow component. */
interface DevToolWindowProps extends BaseProps {
  /** The table register object. */
  tables: TableRegister;
}

export type {
  DevToolContainerProps,
  DevToolWindowProps,
  ResizeHandleHorizontalProps,
  ResizeHandleVerticalProps,
};
