import type { MaximisedPosition, MinimisedPosition } from '@devtools/types';

/** Props for the AlignmentIcon component. */
interface AlignmentIconProps<A extends MaximisedPosition | MinimisedPosition> {
  /** The alignment type to display. */
  alignment: A;
  /** Callback function to select the clicked position. */
  onClick: (alignment: A) => void;
  /** Whether the icon should show in selected state. */
  selected: boolean;
}

export type { AlignmentIconProps };
