import { useCallback } from 'react';

import logo from '@shared/images/Logo@0.25x.png';

import { DevToolButton } from './styled';

import type { DevToolIconProps } from './types';
import type { FC } from 'react';

const VISIBLE_SIZE = 'fit-content';

/**
 * The button/icon that is displayed when the DevTool is closed. Clicking this will show the
 * main window.
 */
const DevToolIcon: FC<DevToolIconProps> = ({ actions, state }: DevToolIconProps) => {
  //== Props ==========================
  const {
    settings: { closedPosition },
  } = state;

  //== Functions ======================
  const handleClick = useCallback(() => actions.setIsClosed(false), [actions]);

  //== Component Return ===============
  return (
    <DevToolButton
      animate={{ height: VISIBLE_SIZE, width: VISIBLE_SIZE }}
      exit={{ height: '0%', width: '0%' }}
      initial={{ height: '0%', width: '0%' }}
      aria-label='Open DevTool'
      onClick={handleClick}
      position={closedPosition}
      type='button'
    >
      <img alt='Tabulus Logo' width={'30px'} src={logo} />
    </DevToolButton>
  );
};

export { DevToolIcon };
export type { DevToolIconProps } from './types';
