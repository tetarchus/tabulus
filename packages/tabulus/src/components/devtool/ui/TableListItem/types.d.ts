import type { TableRegisterEntry } from '@tabulus/contexts';
import type { BaseProps, BaseStyledProps } from '@tabulus/types/devtool';

/** Props for the TableListItem component. */
interface TableListItemProps extends BaseProps {
  /** The ID of the table. */
  id: string;
  /** The data for the table. */
  table: TableRegisterEntry['current'];
}

interface TableListItemContainerProps extends BaseStyledProps {
  $selected: boolean;
}

export type { TableListItemContainerProps, TableListItemProps };
