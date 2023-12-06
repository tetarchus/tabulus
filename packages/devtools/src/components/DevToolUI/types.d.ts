import type { MaximizedPosition, MinimizedPosition } from '@devtools/types';

interface DevToolIconProps {
  position: MinimizedPosition;
}

interface DevToolUIProps {
  positionMin?: DevToolIconProps['position'];
  positionMax?: MaximizedPosition;
}

export type { DevToolUIProps };
