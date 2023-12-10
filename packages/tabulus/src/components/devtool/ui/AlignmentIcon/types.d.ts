import type { BaseStyledProps, MaximisedPosition, MinimisedPosition } from '@tabulus/types/devtool';

/** Props for the AlignmentIcon component. */
interface AlignmentIconProps<A extends MaximisedPosition | MinimisedPosition> {
  /** The alignment type to display. */
  alignment: A;
  /** Callback function to select the clicked position. */
  onClick: (alignment: A) => void;
  /** Whether the icon should show in selected state. */
  selected: boolean;
}

/** Props for the SelectionWrapper styled component. */
interface SelectionWrapperProps extends BaseStyledProps {
  /** Whether the current icon should show a selection border. */
  $selected: AlignmentIconProps<MaximisedPosition | MinimisedPosition>['selected'];
}

/** Props for the IconOuter styled component. */
interface IconOuterProps extends BaseStyledProps {
  /** The alignment option to display on the icon. */
  $alignment: AlignmentIconProps<MaximisedPosition | MinimisedPosition>['alignment'];
}

export type { AlignmentIconProps, IconOuterProps, SelectionWrapperProps };
