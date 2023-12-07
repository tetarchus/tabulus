import type { DevToolSettings, DevToolState } from '@devtools/types';

const defaultSettings: DevToolSettings = {
  closedPosition: 'top-left',
  maximisedPosition: 'left',
  minimisedPosition: 'top-left',
  minimisedPanelHeight: '20rem',
  minimisedPanelWidth: '30rem',
  panelSize: '20rem',
  showInternalEvents: false,
};

const defaultState: DevToolState = {
  firstRun: true,
  mode: 'closed',
  page: 'main',
  selectedTable: '',
  settings: defaultSettings,
};

export { defaultState };
