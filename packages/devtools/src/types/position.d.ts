/** Available positions for minimised/closed state. */
type MinimisedPosition = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';

/** Available positions for maximised state. */
type MaximisedPosition = 'bottom' | 'left' | 'right' | 'top';

type WindowPosition = MaximisedPosition | MinimisedPosition;

export type { MaximisedPosition, MinimisedPosition, WindowPosition };
