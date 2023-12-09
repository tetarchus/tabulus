import type { BaseProps } from '@devtools/types';
import type { TableRegister } from '@tabulus/contexts';

/** Props for the TableListPage. */
interface TableListPageProps extends BaseProps {
  /** The table register. */
  tables: TableRegister;
}

export type { TableListPageProps };
