/** Available positions for minimised/closed mode. */
type MinimisedPosition = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';

/** Available positions for maximised mode. */
type MaximisedPosition = 'bottom' | 'left' | 'right' | 'top';

/** Available positions for all modes. */
type WindowPosition = MaximisedPosition | MinimisedPosition;

/** Config for which edges resize handles should be active. */
interface ResizeEdgeConfig {
  /** Whether the bottom-edge resize handle should be active. */
  bottom: boolean;
  /** Whether the left-edge resize handle should be active. */
  left: boolean;
  /** Whether the right-edge resize handle should be active. */
  right: boolean;
  /** Whether the top-edge resize handle should be active. */
  top: boolean;
}

/** Window size in pixels. */
interface WindowSize {
  /** Window width in pixels. */
  x: number;
  /** Window height in pixels. */
  y: number;
}

export type { MaximisedPosition, MinimisedPosition, ResizeEdgeConfig, WindowPosition, WindowSize };
