import { useState } from 'react';
import { IoMdSettings } from 'react-icons/io';

import { DevToolContainer, DevToolIcon } from './styled';

import type { DevToolUIProps } from './types';
import type { DevToolMode } from '@devtools/types';
import type { FC } from 'react';

const DevToolUI: FC<DevToolUIProps> = ({
  positionMax = 'left',
  positionMin = 'top-left',
}: DevToolUIProps) => {
  // TODO: Obtain initial state from state machine
  const [mode, setMode] = useState<DevToolMode>('closed');

  return mode === 'closed' ? <DevToolIcon /> : <DevToolContainer />;
};

export { DevToolUI };
export type { DevToolUIProps } from './types';
