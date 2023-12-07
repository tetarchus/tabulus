import { AnimatePresence } from 'framer-motion';
import { useStateMachine } from 'little-state-machine';
import { useEffect } from 'react';

import { stateActions } from '@devtools/utils';

import { DevToolIcon } from '../../UI';

import { DevToolWindow } from '../DevToolWindow';

import type { DevToolUIProps } from './types';
import type { StateMachineActionInput } from '@devtools/types';
import type { FC } from 'react';

const DevToolUI: FC<DevToolUIProps> = ({
  closedPosition,
  maximisedPosition,
  minimisedPosition,
}: DevToolUIProps) => {
  const { actions, state } = useStateMachine(stateActions as StateMachineActionInput);
  const { firstRun, mode } = state;

  useEffect(() => {
    if (firstRun) {
      actions.firstRun({ closedPosition, maximisedPosition, minimisedPosition });
    }
  }, [actions, closedPosition, firstRun, maximisedPosition, minimisedPosition]);

  return (
    <AnimatePresence>
      {mode === 'closed' ? (
        <DevToolIcon actions={actions} key='icon' state={state} />
      ) : (
        <DevToolWindow actions={actions} key='window' state={state} size={mode} />
      )}
    </AnimatePresence>
  );
};

export { DevToolUI };
export type { DevToolUIProps } from './types';
