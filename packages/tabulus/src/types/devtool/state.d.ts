import type { DevToolSettings } from './settings';

/** Available modes for the DevTool. */
type DevToolMode = 'max' | 'min';

/** Available page IDs. */
type DevToolPage = 'main' | 'settings' | 'table';

/** DevTool persisted state. */
interface DevToolState {
  /** Whether this is the first time the user has run the tool. */
  firstRun: boolean;
  /** Whether the window is currently closed. */
  isClosed: boolean;
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
