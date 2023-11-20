import { CSS_VALUES } from '@tabulus/constants';
import { styled } from '@tabulus/utils';

import type { CellContainerProps } from './types';

/** A wrapper around all of the cell contents. */
const CellContainer = styled.div<CellContainerProps>`
  //== Static Properties ================
  border: 1px solid black; // TODO: Add this to theme / custom styles
  padding: 0.25rem;
  display: flex;
  width: 100%;

  //== Dynamic Properties =============
  align-items: ${({ verticalAlign }) => {
    switch (verticalAlign) {
      case 'bottom':
        return CSS_VALUES.FLEX.ALIGN.END;
      case 'middle':
        return CSS_VALUES.FLEX.ALIGN.CENTER;
      case 'top':
        return CSS_VALUES.FLEX.ALIGN.START;
    }
  }};
  justify-content: ${({ horizontalAlign }) => {
    switch (horizontalAlign) {
      case 'center':
        return CSS_VALUES.FLEX.ALIGN.CENTER;
      case 'left':
        return CSS_VALUES.FLEX.ALIGN.START;
      case 'right':
        return CSS_VALUES.FLEX.ALIGN.END;
    }
  }};
`;

export { CellContainer };
