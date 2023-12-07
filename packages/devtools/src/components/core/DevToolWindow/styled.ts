import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { getMaximisedPosition, getMinimisedPosition, isMaximisedPosition } from '@devtools/utils';

import type { DevToolContainerProps } from './types';
import type { CSSObject } from '@emotion/styled';
import type { CSSProperties } from 'react';

const DevToolContainer = styled(motion.div)<DevToolContainerProps>`
  background-color: ${({ theme }): CSSProperties['backgroundColor'] => theme.colors.dark};
  box-sizing: border-box;
  color: ${({ theme }): CSSProperties['color'] => theme.colors.light};
  position: absolute;

  ${({ position }): CSSObject =>
    isMaximisedPosition(position)
      ? getMaximisedPosition(position)
      : getMinimisedPosition(position)};
`;

const DevToolTitleIcons = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: center;
`;

export { DevToolContainer, DevToolTitleIcons };
