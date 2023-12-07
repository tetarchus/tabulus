import styled from '@emotion/styled';
import { arrayIncludes } from '@tetarchus/utils';

import { POSITIONS } from '@devtools/constants';

import type { AlignmentIconProps } from './types';
import type { MaximisedPosition, MinimisedPosition } from '@devtools/types';

// TODO: Re-use from main lib?
// TODO: Move these consts
const FLEX_ALIGN = {
  END: 'flex-end',
  START: 'flex-start',
  STRETCH: 'stretch',
} as const;

const SelectionWrapper = styled.button<{
  selected: AlignmentIconProps<MaximisedPosition | MinimisedPosition>['selected'];
}>`
  background-color: ${({ selected }) => (selected ? '#cccccc' : 'transparent')};
  border: none;
  border-radius: 0.1rem;
  box-sizing: border-box;
  color: ${({ selected }) => (selected ? '#000000' : '#FFFFFF')};
  cursor: pointer;
  padding: 0.2rem;
  max-width: 3rem;
  width: 100%;
  height: 100%;
`;

const IconOuter = styled.div<{
  alignment: AlignmentIconProps<MaximisedPosition | MinimisedPosition>['alignment'];
}>`
  align-items: ${({ alignment }) => {
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
  flex-direction: ${({ alignment }) =>
    arrayIncludes([POSITIONS.BOTTOM, POSITIONS.TOP], alignment) ? 'column' : 'row'};
  height: 100%;
  justify-content: ${({ alignment }) => {
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

const IconInner = styled.div`
  background-color: ${({ theme }) => theme.colors.teal};
  box-sizing: border-box;
  padding: 10%;
`;

export { IconInner, IconOuter, SelectionWrapper };
