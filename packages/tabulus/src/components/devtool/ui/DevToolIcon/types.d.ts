import type { BaseProps, BaseStyledProps, MinimizedPosition } from '@tabulus/types/devtool';

/** Props for the DevToolButton styled component. */
interface DevToolButtonProps extends BaseStyledProps {
  /** Where on the screen to position the button. */
  position: MinimizedPosition;
}

/** Props for the DevToolIcon component. */
interface DevToolIconProps extends BaseProps {}

export type { DevToolButtonProps, DevToolIconProps };
