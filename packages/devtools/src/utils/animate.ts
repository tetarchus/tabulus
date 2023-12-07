import type { MaximisedPosition } from '@devtools/types';
import type { MotionProps } from 'framer-motion';

const createMaximisedAnimation = (position: MaximisedPosition): MotionProps => ({
  animate: { [position]: '0%' },
  exit: { [position]: '-100%' },
  initial: { [position]: '-100%' },
});

export { createMaximisedAnimation };
