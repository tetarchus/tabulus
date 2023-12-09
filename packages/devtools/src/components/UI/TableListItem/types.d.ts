import type { BaseProps } from '@devtools/types';
import type { TableRegister } from '@tabulus/contexts';

/** Props for the TableListItem component. */
interface TableListItemProps extends BaseProps {
  /** The ID of the table. */
  id: string;
  /** The data for the table. */
  table: TableRegister[string]['current'];
}

export type { TableListItemProps };
