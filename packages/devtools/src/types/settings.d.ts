import type { MaximisedPosition, MinimisedPosition } from './position';
import type { CSSProperties } from 'react';

/** Settings for the DevTools. */
interface DevToolSettings {
  /** Screen position to display the button when closed. */
  closedPosition: MinimisedPosition;
  /** Screen edge to display the maximised tool window. */
  maximisedPosition: MaximisedPosition;
  /** User resized window height for minimised window. */
  minimisedPanelHeight: CSSProperties['height'];
  /** User resized window width for minimised window. */
  minimisedPanelWidth: CSSProperties['width'];
  /** Screen position to display the minimised tool window. */
  minimisedPosition: MinimisedPosition;
  /** Window width/height for the maximised window. */
  panelSize: CSSProperties['height'] | CSSProperties['width'];
  /** Whether to display internal events in the event log. */
  showInternalEvents: boolean;
}

export type { DevToolSettings };
