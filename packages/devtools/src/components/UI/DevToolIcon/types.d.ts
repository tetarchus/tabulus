import type { BaseProps, MinimizedPosition } from '@devtools/types';

/** Props for the DevToolButton styled component. */
interface DevToolButtonProps {
  /** Where on the screen to position the button. */
  position: MinimizedPosition;
}

/** Props for the DevToolIcon component. */
interface DevToolIconProps extends BaseProps {}

export type { DevToolButtonProps, DevToolIconProps };
