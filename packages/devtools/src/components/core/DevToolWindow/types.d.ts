import type { BaseProps, DevToolMode, WindowPosition } from '@devtools/types';

interface DevToolContainerProps {
  /** The position of the window. */
  position: WindowPosition;
  /** The current window size. */
  size: Exclude<DevToolMode, 'closed'>;
}

interface DevToolWindowProps extends BaseProps, Pick<DevToolContainerProps, 'size'> {}

export type { DevToolContainerProps, DevToolWindowProps };
