import { createStore } from 'little-state-machine';

import { defaultState } from '@devtools/config';
import { STATE_KEY } from '@devtools/constants';

import type { StateActions } from '@devtools/types';

/**
 * Initialises the localStorage value for little-state-machine.
 */
const initState = () => {
  if (typeof window !== 'undefined') {
    createStore(defaultState, {
      middleWares: [],
      name: STATE_KEY,
      storageType: window.localStorage,
    });
  }
};

const resetState = () => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(STATE_KEY);
    initState();
  }
};

/**
 * Actions that can be used to update the current state.
 */
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
  setIsClosed: (state, isClosed) => ({ ...state, isClosed }),
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

export { initState, resetState, stateActions };
