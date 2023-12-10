import type { SimpleRowData, UseTabulusReturn } from '@tabulus/types';
import type { MaximisedPosition, MinimisedPosition } from '@tabulus/types/devtool';

/** Props for the DevToolUI component. */
interface DevToolUIProps {
  /**
   * Dev defined closed position - overrides the initial default, but can be overridden
   * by user-prefs.
   */
  closedPosition?: MinimisedPosition | undefined;
  /**
   * Dev defined maximised window position - overrides the initial default, but can be overridden
   * by user-prefs.
   */
  maximisedPosition?: MaximisedPosition | undefined;
  /**
   * Dev defined minimised window position - overrides the initial default, but can be overridden
   * by user-prefs.
   */
  minimisedPosition?: MinimisedPosition | undefined;
  /**
   * Table data passed in manually.
   */
  table?: UseTabulusReturn<SimpleRowData> | null | undefined;
}

export type { DevToolUIProps };
