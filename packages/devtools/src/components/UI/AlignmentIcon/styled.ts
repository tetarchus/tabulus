import { arrayIncludes } from '@tetarchus/utils';

import { FLEX_ALIGN, POSITIONS } from '@devtools/constants';
import { styled } from '@devtools/utils';

import type { AlignmentIconProps } from './types';
import type { MaximisedPosition, MinimisedPosition } from '@devtools/types';
import type { CSSProperties } from 'react';

/** Wrapper around the alignment icon to display the selection status. */
const SelectionWrapper = styled.button<{
  selected: AlignmentIconProps<MaximisedPosition | MinimisedPosition>['selected'];
}>`
  background-color: ${({ selected, theme }): CSSProperties['backgroundColor'] =>
    selected ? theme.colors.highlight : 'transparent'};
  border: none;
  border-radius: 0.1rem;
  box-sizing: border-box;
  color: ${({ selected, theme }): CSSProperties['color'] =>
    selected ? theme.colors.black : theme.colors.white};
  cursor: pointer;
  padding: 0.2rem;
  max-width: 3rem;
  width: 100%;
  height: 100%;
`;

/** The 'screen' border part of the icon.  */
const IconOuter = styled.div<{
  alignment: AlignmentIconProps<MaximisedPosition | MinimisedPosition>['alignment'];
}>`
  align-items: ${({ alignment }): CSSProperties['alignItems'] => {
    if (arrayIncludes([POSITIONS.TOP_LEFT, POSITIONS.TOP_RIGHT], alignment)) {
      return FLEX_ALIGN.START;
    } else if (arrayIncludes([POSITIONS.BOTTOM_LEFT, POSITIONS.BOTTOM_RIGHT], alignment)) {
      return FLEX_ALIGN.END;
    } else {
      return FLEX_ALIGN.STRETCH;
    }
  }};
  background-color: transparent;
  border: 2px solid;
  border-radius: 0.1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ alignment }): CSSProperties['flexDirection'] =>
    arrayIncludes([POSITIONS.BOTTOM, POSITIONS.TOP], alignment) ? 'column' : 'row'};
  height: 100%;
  justify-content: ${({ alignment }): CSSProperties['justifyContent'] => {
    if (arrayIncludes([POSITIONS.TOP_LEFT, POSITIONS.BOTTOM_LEFT, POSITIONS.TOP], alignment)) {
      return FLEX_ALIGN.START;
    } else if (
      arrayIncludes(
        [POSITIONS.TOP_RIGHT, POSITIONS.BOTTOM_RIGHT, POSITIONS.BOTTOM, POSITIONS.RIGHT],
        alignment,
      )
    ) {
      return FLEX_ALIGN.END;
    } else {
      return FLEX_ALIGN.STRETCH;
    }
  }};
  padding: 0.1rem;
  width: 100%;
`;

/** The window position indicator part of the icon. */
const IconInner = styled.div`
  background-color: ${({ theme }): CSSProperties['backgroundColor'] => theme.colors.teal};
  box-sizing: border-box;
  padding: 10%;
`;

export { IconInner, IconOuter, SelectionWrapper };
