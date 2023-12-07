import type { MaximisedPosition, MinimisedPosition } from '@devtools/types';

interface DevToolUIProps {
  closedPosition?: MinimisedPosition | undefined;
  maximisedPosition?: MaximisedPosition | undefined;
  minimisedPosition?: MinimisedPosition | undefined;
}

export type { DevToolUIProps };
