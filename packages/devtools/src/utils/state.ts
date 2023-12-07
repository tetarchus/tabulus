import type { StateActions } from '@devtools/types';

const stateActions: StateActions = {
  firstRun: (state, { closedPosition, maximisedPosition, minimisedPosition }) => ({
    ...state,
    firstRun: false,
    settings: {
      ...state.settings,
      ...(closedPosition ? { closedPosition, minimisedPosition: closedPosition } : {}),
      ...(maximisedPosition ? { maximisedPosition } : {}),
      ...(minimisedPosition ? { minimisedPosition } : {}),
    },
  }),
  setClosedPosition: (state, closedPosition) => ({
    ...state,
    settings: { ...state.settings, closedPosition },
  }),
  setMaximisedPosition: (state, maximisedPosition) => ({
    ...state,
    settings: { ...state.settings, maximisedPosition },
  }),
  setMinimisedPosition: (state, minimisedPosition) => ({
    ...state,
    settings: { ...state.settings, minimisedPosition },
  }),
  setMode: (state, mode) => ({ ...state, mode }),
  setPage: (state, page) => ({ ...state, page }),
  setPanelHeight: (state, minimisedPanelHeight) => ({
    ...state,
    settings: { ...state.settings, minimisedPanelHeight },
  }),
  setPanelWidth: (state, minimisedPanelWidth) => ({
    ...state,
    settings: { ...state.settings, minimisedPanelWidth },
  }),
  setPanelSize: (state, panelSize) => ({ ...state, settings: { ...state.settings, panelSize } }),
  setSelectedTable: (state, selectedTable) => ({ ...state, selectedTable }),
  setShowInternalEvents: (state, showInternalEvents) => ({
    ...state,
    settings: { ...state.settings, showInternalEvents },
  }),
};

export { stateActions };
