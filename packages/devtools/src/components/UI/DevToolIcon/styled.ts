import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { getMinimisedPosition } from '@devtools/utils';

import type { DevToolButtonProps } from './types';
import type { CSSProperties } from 'react';

const DevToolButton = styled(motion.button)<DevToolButtonProps>`
  align-items: center;
  background-color: ${({ theme }): CSSProperties['backgroundColor'] => theme.colors.dark};
  border: none;
  color: ${({ theme }): CSSProperties['color'] => theme.colors.light};
  cursor: pointer;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 0.2rem;
  position: absolute;

  ${({ position }) => getMinimisedPosition(position)}
`;

export { DevToolButton };
