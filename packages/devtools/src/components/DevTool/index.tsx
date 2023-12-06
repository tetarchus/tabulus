import { createStore, StateMachineProvider } from 'little-state-machine';
import { useContext, useEffect, useId } from 'react';

import { TabulusRegistryContext } from '@tabulus/contexts';

import { DevToolUI } from '../DevToolUI';

import type { DevToolProps } from './types';
import type { FC } from 'react';

// TODO: Move
const defaultState = { visible: false, isCollapsed: true, pageId: '' };

const DevTool: FC<DevToolProps> = ({
  positionMax = 'left',
  positionMin = 'top-left',
}: DevToolProps) => {
  const { tables } = useContext(TabulusRegistryContext);
  const id = useId();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      createStore(defaultState, {
        middleWares: [],
        name: '__TABULUS_DEVTOOLS__',
        persist: 'action',
        storageType: window.localStorage,
      });
    }
  }, []);

  return (
    <StateMachineProvider>
      <DevToolUI positionMax={positionMax} positionMin={positionMin} />
    </StateMachineProvider>
  );
};

export { DevTool };
export type { DevToolProps } from './types';
