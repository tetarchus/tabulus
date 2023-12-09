import type { BaseProps } from '@devtools/types';
import type { TableRegister } from '@tabulus/contexts';

/** Props for the TableMainPage. */
interface TableMainPageProps extends BaseProps {
  /** Table Registry object. */
  tables: TableRegister;
}

export type { TableMainPageProps };
