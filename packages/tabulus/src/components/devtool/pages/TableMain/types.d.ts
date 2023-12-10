import type { TableRegister } from '@tabulus/contexts';
import type { BaseProps } from '@tabulus/types/devtool';

/** Props for the TableMainPage. */
interface TableMainPageProps extends BaseProps {
  /** Table Registry object. */
  tables: TableRegister;
}

export type { TableMainPageProps };
