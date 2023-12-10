import { arrayIncludes } from '@tetarchus/utils';

import { CSS_VALUES } from '@tabulus/constants';
import { POSITIONS } from '@tabulus/constants/devtool';
import { styled } from '@tabulus/utils';

import type { IconOuterProps, SelectionWrapperProps } from './types';
import type { BaseStyledProps } from '@tabulus/types/devtool';
import type { CSSProperties } from 'react';

/** Wrapper around the alignment icon to display the selection status. */
const SelectionWrapper = styled.button<SelectionWrapperProps>`
  background-color: ${({ $selected, theme }): CSSProperties['backgroundColor'] =>
    $selected ? theme.colors.highlight : 'transparent'};
  border: none;
  border-radius: ${({ theme }): CSSProperties['borderRadius'] => theme.borderRadius.sm};
  box-sizing: border-box;
  color: ${({ $selected, theme }): CSSProperties['color'] =>
    $selected ? theme.colors.black : theme.colors.white};
  cursor: pointer;
  padding: ${({ theme }): CSSProperties['padding'] => theme.padding.sm};
  max-width: 3rem;
  width: 100%;
  height: 100%;
`;

/** The 'screen' border part of the icon.  */
const IconOuter = styled.div<IconOuterProps>`
  align-items: ${({ $alignment }): CSSProperties['alignItems'] => {
    if (arrayIncludes([POSITIONS.TOP_LEFT, POSITIONS.TOP_RIGHT], $alignment)) {
      return CSS_VALUES.FLEX.ALIGN.START;
    } else if (arrayIncludes([POSITIONS.BOTTOM_LEFT, POSITIONS.BOTTOM_RIGHT], $alignment)) {
      return CSS_VALUES.FLEX.ALIGN.END;
    } else {
      return CSS_VALUES.FLEX.ALIGN.STRETCH;
    }
  }};
  background-color: transparent;
  border: 2px solid;
  border-radius: ${({ theme }): CSSProperties['borderRadius'] => theme.borderRadius.sm};
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({ $alignment }): CSSProperties['flexDirection'] =>
    arrayIncludes([POSITIONS.BOTTOM, POSITIONS.TOP], $alignment) ? 'column' : 'row'};
  height: 100%;
  justify-content: ${({ $alignment }): CSSProperties['justifyContent'] => {
    if (arrayIncludes([POSITIONS.TOP_LEFT, POSITIONS.BOTTOM_LEFT, POSITIONS.TOP], $alignment)) {
      return CSS_VALUES.FLEX.ALIGN.START;
    } else if (
      arrayIncludes(
        [POSITIONS.TOP_RIGHT, POSITIONS.BOTTOM_RIGHT, POSITIONS.BOTTOM, POSITIONS.RIGHT],
        $alignment,
      )
    ) {
      return CSS_VALUES.FLEX.ALIGN.END;
    } else {
      return CSS_VALUES.FLEX.ALIGN.STRETCH;
    }
  }};
  padding: ${({ theme }): CSSProperties['padding'] => theme.padding.xs};
  width: 100%;
`;

/** The window position indicator part of the icon. */
const IconInner = styled.div<BaseStyledProps>`
  background-color: ${({ theme }): CSSProperties['backgroundColor'] => theme.colors.teal};
  box-sizing: border-box;
  padding: ${({ theme }): CSSProperties['padding'] => theme.padding.sm};
`;

export { IconInner, IconOuter, SelectionWrapper };
