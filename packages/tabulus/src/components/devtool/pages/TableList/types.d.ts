import type { BaseProps, DevToolRegister } from '@tabulus/types/devtool';

/** Props for the TableListPage. */
interface TableListPageProps extends BaseProps {
  /** The table register. */
  tables: DevToolRegister;
}

export type { TableListPageProps };
