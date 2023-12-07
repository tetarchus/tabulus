import type {
  DevToolMode,
  DevToolPage,
  DevToolState,
  MaximisedPosition,
  MinimisedPosition,
} from '@devtools/types';
import type { ActionsOutput } from 'little-state-machine/dist/types';
import type { CSSProperties } from 'react';

type FirstRunActionPayload = {
  closedPosition: MinimisedPosition | undefined;
  maximisedPosition: MaximisedPosition | undefined;
  minimisedPosition: MinimisedPosition | undefined;
};
type SetClosedPositionActionPayload = MinimisedPosition;
type SetMaximisedPositionActionPayload = MaximisedPosition;
type SetMinimisedPositionActionPayload = MinimisedPosition;
type SetMinimisedPanelHeightActionPayload = CSSProperties['height'];
type SetMinimisedPanelWidthActionPayload = CSSProperties['width'];
type SetModeActionPayload = DevToolMode;
type SetPageActionPayload = DevToolPage;
type SetPanelSizeActionPayload = CSSProperties['height'] | CSSProperties['width'];
type SetShowInternalEventsActionPayload = boolean;
type SetTableActionPayload = string;

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

type ActionFunction<Payload extends ActionPayload> = (
  state: DevToolState,
  payload: Payload,
) => DevToolState;

interface StateActions {
  firstRun: ActionFunction<FirstRunActionPayload>;
  setClosedPosition: ActionFunction<SetClosedPositionActionPayload>;
  setMaximisedPosition: ActionFunction<SetMaximisedPositionActionPayload>;
  setMinimisedPosition: ActionFunction<SetMinimisedPositionActionPayload>;
  setMode: ActionFunction<SetModeActionPayload>;
  setPage: ActionFunction<SetPageActionPayload>;
  setPanelHeight: ActionFunction<SetMinimisedPanelHeightActionPayload>;
  setPanelWidth: ActionFunction<SetMinimisedPanelWidthActionPayload>;
  setPanelSize: ActionFunction<SetPanelSizeActionPayload>;
  setSelectedTable: ActionFunction<SetTableActionPayload>;
  setShowInternalEvents: ActionFunction<SetShowInternalEventsActionPayload>;
}

type StateMachineActions = ActionsOutput<ActionFunction<ActionPayload>, StateActions>;
type StateMachineActionInput = StateActions & { [x: string]: ActionFunction<ActionPayload> };

export type {
  ActionFunction,
  ActionPayload,
  StateActions,
  StateMachineActionInput,
  StateMachineActions,
};
