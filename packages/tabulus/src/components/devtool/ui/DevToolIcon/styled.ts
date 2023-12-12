import { motion } from 'framer-motion';

import { styled } from '@tabulus/utils';
import { setWindowPosition } from '@tabulus/utils/devtool';

import type { DevToolButtonProps } from './types';
import type { CSSObject } from '@tabulus/utils';
import type { CSSProperties } from 'react';

/** Button element around the icon. */
const DevToolButton = styled(motion.button)<DevToolButtonProps>`
  /* Hack to prevent tailwind preflight overwriting the color with transparent. */
  && {
    background-color: ${({ theme }): CSSProperties['backgroundColor'] => theme.colors.dark};
  }

  align-items: center;
  border: 1px solid ${({ theme }): CSSProperties['borderColor'] => theme.colors.border};
  color: ${({ theme }): CSSProperties['color'] => theme.colors.light};
  cursor: pointer;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: ${({ theme }): CSSProperties['padding'] => theme.padding.sm};
  position: absolute;
  z-index: ${({ theme }): CSSProperties['zIndex'] => theme.zIndex.button};

  ${({ position }): CSSObject => setWindowPosition(position)}
`;

export { DevToolButton };
