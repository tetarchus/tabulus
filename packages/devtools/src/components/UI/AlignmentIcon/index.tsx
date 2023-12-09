import { useCallback } from 'react';

import { IconInner, IconOuter, SelectionWrapper } from './styled';

import type { AlignmentIconProps } from './types';
import type { MaximisedPosition, MinimisedPosition } from '@devtools/types';

/** Display Icon for showing window position options. */
const AlignmentIcon = <A extends MaximisedPosition | MinimisedPosition>({
  alignment,
  onClick,
  selected,
}: AlignmentIconProps<A>) => {
  const handleClick = useCallback(() => onClick(alignment), [alignment, onClick]);
  return (
    <SelectionWrapper selected={selected} onClick={handleClick} type='button'>
      <IconOuter alignment={alignment}>
        <IconInner />
      </IconOuter>
    </SelectionWrapper>
  );
};

export { AlignmentIcon };
export type { AlignmentIconProps } from './types';
