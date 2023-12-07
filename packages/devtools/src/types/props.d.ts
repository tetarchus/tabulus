import type { StateMachineActions } from './actions';
import type { DevToolState } from './state';

/** Standard props that are shared between most components. */
interface BaseProps {
  /** The actions that can be triggered to update the StateMachine state. */
  actions: StateMachineActions;
  /** The currently stored state. */
  state: DevToolState;
}

export type { BaseProps };
