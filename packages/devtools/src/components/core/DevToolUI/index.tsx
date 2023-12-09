import { AnimatePresence } from 'framer-motion';
import { useStateMachine } from 'little-state-machine';
import { useEffect } from 'react';

import { useDevTool } from '@devtools/hooks';
import { stateActions } from '@devtools/utils';

import { DevToolIcon } from '../../UI';

import { DevToolWindow } from '../DevToolWindow';

import type { DevToolUIProps } from './types';
import type { StateMachineActionInput } from '@devtools/types';
import type { FC } from 'react';

/** The actual DevTool UI and logic contained within the context wrappers. */
const DevToolUI: FC<DevToolUIProps> = ({
  closedPosition,
  maximisedPosition,
  minimisedPosition,
}: DevToolUIProps) => {
  //== State ==========================
  const { actions, state } = useStateMachine(stateActions as StateMachineActionInput);
  // Account for SSR and just use the defaults while on the server
  const { firstRun, isClosed } = state;

  //== Hook Values ====================
  const { tables } = useDevTool();

  //== Setup ==========================
  useEffect(() => {
    if (firstRun) {
      actions.firstRun({ closedPosition, maximisedPosition, minimisedPosition });
    }
  }, [actions, closedPosition, firstRun, maximisedPosition, minimisedPosition]);

  //== Component Return ===============
  return (
    <AnimatePresence>
      {isClosed && <DevToolIcon actions={actions} key='icon' state={state} />}
      {!isClosed && <DevToolWindow actions={actions} key='window' state={state} tables={tables} />}
    </AnimatePresence>
  );
};

export { DevToolUI };
export type { DevToolUIProps } from './types';
