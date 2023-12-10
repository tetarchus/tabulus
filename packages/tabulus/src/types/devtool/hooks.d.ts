import type { UseTabulusReturn } from '../hooks';
import type { SimpleRowData } from '../row';
import type { TableRegisterEntry } from '@tabulus/contexts';

type DevToolTableSourceType = 'manual' | 'registry';

interface DevToolTableSource {
  source?: DevToolTableSourceType;
}

/** DevTool register with additional props injected. */
type DevToolRegister = Record<string, TableRegisterEntry & DevToolTableSource>;

/** Props to pass in to the useDevTool hook. */
interface UseDevToolProps {
  /** Whether to override the default DevTool behaviour and display even in production. */
  showInProduction?: boolean;
  /** Manually passed in table data. */
  table?: UseTabulusReturn<SimpleRowData> | null | undefined;
}

/** Return value for the useDevTool hook. */
interface UseDevToolReturn {
  /** Whether the DevTool should be displayed. */
  isDevToolEnabled: boolean;
  /** Table Register */
  tables: DevToolRegister;
}

export type {
  DevToolRegister,
  DevToolTableSource,
  DevToolTableSourceType,
  UseDevToolProps,
  UseDevToolReturn,
};
