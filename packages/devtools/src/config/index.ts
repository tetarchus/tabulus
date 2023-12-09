import type { DevToolSettings, DevToolState } from '@devtools/types';

/**
 * Default settings to use if no user-overrides exist.
 */
const defaultSettings: DevToolSettings = {
  closedPosition: 'top-left',
  maximisedPosition: 'left',
  minimisedPosition: 'top-left',
  minimisedPanelHeight: 320,
  minimisedPanelWidth: 480,
  panelSize: 320,
  showInternalEvents: false,
};

/**
 * Default state to save on initialisation.
 */
const defaultState: DevToolState = {
  firstRun: true,
  isClosed: true,
  mode: 'max',
  page: 'main',
  selectedTable: '',
  settings: defaultSettings,
};

export { defaultState };
