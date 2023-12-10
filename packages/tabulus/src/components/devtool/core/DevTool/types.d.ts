import type { DevToolUIProps } from '../DevToolUI';
import type { SimpleRowData, UseTabulusReturn } from '@tabulus/types';

/** Props for the DevTool component. */
interface DevToolProps extends DevToolUIProps {
  /** Whether to ignore the default behavior and display the DevTool even in production. */
  showInProduction?: boolean;
  /** Optional table passed in manually. */
  table?: UseTabulusReturn<SimpleRowData> | undefined;
}

export type { DevToolProps };
