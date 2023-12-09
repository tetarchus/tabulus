import { motion } from 'framer-motion';

import { setWindowPosition, styled } from '@devtools/utils';

import type { DevToolButtonProps } from './types';
import type { CSSObject } from '@devtools/utils';
import type { CSSProperties } from 'react';

/** Button element around the icon. */
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
  z-index: 99999998;

  ${({ position }): CSSObject => setWindowPosition(position)}
`;

export { DevToolButton };
