import type { RowDataBase, TabulusProps } from '@tabulus/types';
import type { ReactNode } from 'react';

/** Value of the `TableManager` context that is provided to consumers. */
interface TableManagerValue<RowData extends RowDataBase = RowDataBase>
  extends TabulusProps<RowData> {
  /** Whether the context has been initialised. */
  initialized: boolean;
  /** The rows to display on the table. */
  rows: RowData[];
}

/** Props to be passed in to the Context provider. */
interface TableManagerProviderProps<RowData extends RowDataBase = RowDataBase>
  extends Omit<TabulusProps<RowData>, 'id'> {
  /** Children of the provider that will have access to the context value. */
  readonly children: ReactNode;
  /** The ID of the table this manager belongs to. */
  readonly tableId: string;
}

export type { TableManagerProviderProps, TableManagerValue };
