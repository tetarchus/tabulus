import { useCallback } from 'react';
import { FaRegWindowRestore } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { MdMinimize } from 'react-icons/md';

import logo from '@shared/images/Logo@0.25x.png';

import { GroupedRow, IconButton, TitleBarContainer } from '../styled';

import type { TitleBarProps } from './types';
import type { FC } from 'react';

const TitleBar: FC<TitleBarProps> = ({ actions, state }: TitleBarProps) => {
  const handleMinimise = useCallback(() => actions.setMode('min'), [actions]);
  const handleClose = useCallback(() => actions.setMode('closed'), [actions]);

  //== Component Return ===============
  return (
    <TitleBarContainer>
      <GroupedRow>
        <img alt='Tabulus Logo' width={'20px'} src={logo} style={{ marginRight: '0.3rem' }} />
        <span>Tabulus DevTool</span>
      </GroupedRow>
      <GroupedRow>
        <IconButton onClick={handleMinimise}>
          {state.mode === 'max' ? <MdMinimize size={20} /> : <FaRegWindowRestore size={20} />}
        </IconButton>
        <IconButton onClick={handleClose}>
          <IoMdClose size={20} />
        </IconButton>
      </GroupedRow>
    </TitleBarContainer>
  );
};

export { TitleBar };
export type { TitleBarProps } from './types';
