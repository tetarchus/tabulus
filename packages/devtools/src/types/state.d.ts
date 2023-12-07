import type { DevToolSettings } from './settings';

type DevToolMode = 'closed' | 'max' | 'min';

type DevToolPage = 'main' | 'settings' | 'table';

/** DevTool persisted state. */
interface DevToolState {
  /** Whether this is the first time the user has run the tool. */
  firstRun: boolean;
  /** The current display mode of the tool. */
  mode: DevToolMode;
  /** The current page of the tool. */
  page: DevToolPage;
  /** The currently selected table ID. */
  selectedTable: string;
  /** Stored settings for the DevTool. */
  settings: DevToolSettings;
}

export type { DevToolMode, DevToolPage, DevToolState };
