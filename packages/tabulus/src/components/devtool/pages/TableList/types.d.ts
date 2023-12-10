import type { TableRegister } from '@tabulus/contexts';
import type { BaseProps } from '@tabulus/types/devtool';

/** Props for the TableListPage. */
interface TableListPageProps extends BaseProps {
  /** The table register. */
  tables: TableRegister;
}

export type { TableListPageProps };
