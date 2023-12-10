import type { TableRegisterEntry } from '@tabulus/contexts';
import type {
  BaseProps,
  BaseStyledProps,
  DevToolTableSource,
  DevToolTableSourceType,
} from '@tabulus/types/devtool';

/** Props for the TableListItem component. */
interface TableListItemProps extends BaseProps {
  /** The ID of the table. */
  id: string;
  /** The data for the table. */
  table: TableRegisterEntry['current'] & DevToolTableSource;
}

/** Props for the TableListItemContainer styled component. */
interface TableListItemContainerProps extends BaseStyledProps {
  $selected: boolean;
}

/** Props for the TableType styled component. */
interface TableTypeProps extends BaseStyledProps {
  $type: DevToolTableSourceType;
}

export type { TableListItemContainerProps, TableListItemProps, TableTypeProps };
