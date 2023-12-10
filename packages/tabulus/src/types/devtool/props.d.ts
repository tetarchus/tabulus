import type { StateMachineActions } from './actions';
import type { DevToolState } from './state';
import type { DevToolTheme } from '@tabulus/theme/devtool';

/** Standard props that are shared between most components. */
interface BaseProps {
  /** The actions that can be triggered to update the StateMachine state. */
  actions: StateMachineActions;
  /** The currently stored state. */
  state: DevToolState;
}

/** Props for styled components including the custom DevTool theme. */
interface BaseStyledProps {
  theme: DevToolTheme;
}

export type { BaseProps, BaseStyledProps };
