import type {
  DevToolMode,
  DevToolPage,
  DevToolState,
  MaximisedPosition,
  MinimisedPosition,
} from '@devtools/types';
import type { ActionsOutput } from 'little-state-machine/dist/types';

/** Payload for the `firstRun` action to setup dev-set values. */
type FirstRunActionPayload = {
  closedPosition: MinimisedPosition | undefined;
  maximisedPosition: MaximisedPosition | undefined;
  minimisedPosition: MinimisedPosition | undefined;
};
/** Payload for the `setClosedPosition` action. */
type SetClosedPositionActionPayload = MinimisedPosition;
/** Payload for the `setIsClosed` action. */
type SetIsClosedActionPayload = boolean;
/** Payload for the `setMaximisedPosition` action. */
type SetMaximisedPositionActionPayload = MaximisedPosition;
/** Payload for the `setPanelHeight` action. */
type SetMinimisedPanelHeightActionPayload = number;
/** Payload for the `setPanelWidth` action. */
type SetMinimisedPanelWidthActionPayload = number;
/** Payload for the `setMinimisedPosition` action. */
type SetMinimisedPositionActionPayload = MinimisedPosition;
/** Payload for the `setMode` action. */
type SetModeActionPayload = DevToolMode;
/** Payload for the `setPage` action. */
type SetPageActionPayload = DevToolPage;
/** Payload for the `setPanelSize` action. */
type SetPanelSizeActionPayload = number;
/** Payload for the `setShowInternalEvents` action. */
type SetShowInternalEventsActionPayload = boolean;
/** Payload for the `setTable` action. */
type SetTableActionPayload = string;

/** Combined action payload types. */
type ActionPayload =
  | SetClosedPositionActionPayload
  | SetMaximisedPositionActionPayload
  | SetMinimisedPanelHeightActionPayload
  | SetMinimisedPositionActionPayload
  | SetMinimisedPanelWidthActionPayload
  | SetModeActionPayload
  | SetPageActionPayload
  | SetPanelSizeActionPayload
  | SetShowInternalEventsActionPayload
  | SetTableActionPayload;

/** Action function generic type for state actions. */
type ActionFunction<Payload extends ActionPayload> = (
  state: DevToolState,
  payload: Payload,
) => DevToolState;

/** The actions that can be run to update the DevTool state. */
interface StateActions {
  /**
   * Run on first run of the tool after initial state has been set, to set any developer-set
   * values.
   */
  firstRun: ActionFunction<FirstRunActionPayload>;
  /** Set the preferred position of the button when the DevTool is closed. */
  setClosedPosition: ActionFunction<SetClosedPositionActionPayload>;
  /** Set whether the main window is closed. */
  setIsClosed: ActionFunction<SetIsClosedActionPayload>;
  /** Set the preferred position of the window when the DevTool is maximised. */
  setMaximisedPosition: ActionFunction<SetMaximisedPositionActionPayload>;
  /** Set the preferred position of the window when the DevTool is minimised. */
  setMinimisedPosition: ActionFunction<SetMinimisedPositionActionPayload>;
  /** Set the current display mode of the DevTool. */
  setMode: ActionFunction<SetModeActionPayload>;
  /** Set the current page of the DevTool. */
  setPage: ActionFunction<SetPageActionPayload>;
  /** Set the height of the minimised panel. */
  setPanelHeight: ActionFunction<SetMinimisedPanelHeightActionPayload>;
  /** Set the width of the minimised panel. */
  setPanelWidth: ActionFunction<SetMinimisedPanelWidthActionPayload>;
  /**
   * Set the size of the maximised panel in the cross-axis (vertical if on top/bottom,
   * horizontal if on left/right).
   */
  setPanelSize: ActionFunction<SetPanelSizeActionPayload>;
  /** Set the currently selected table ID. */
  setSelectedTable: ActionFunction<SetTableActionPayload>;
  /** Set whether to display internal events in the event log. */
  setShowInternalEvents: ActionFunction<SetShowInternalEventsActionPayload>;
}

/** The action type that is returned from the `useStateMachine` hook. */
type StateMachineActions = ActionsOutput<ActionFunction<ActionPayload>, StateActions>;

/** The input type to pass to the Little State Machine hook. */
type StateMachineActionInput = StateActions & { [x: string]: ActionFunction<ActionPayload> };

export type {
  ActionFunction,
  ActionPayload,
  StateActions,
  StateMachineActionInput,
  StateMachineActions,
};
