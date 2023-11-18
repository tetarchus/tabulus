import type { RowDataBase, TabulusProps } from '@tabulus/types';
import type { ReactNode } from 'react';

/** Value of the `TableManager` context that is provided to consumers. */
interface TabulusContextValue<RowData extends RowDataBase = RowDataBase>
  extends TabulusProps<RowData> {}

/** Props to be passed in to the Context provider. */
interface TabulusContextProviderProps<RowData extends RowDataBase = RowDataBase>
  extends TabulusProps<RowData> {
  /** Children of the provider that will have access to the context value. */
  readonly children: ReactNode;
}

export type { TabulusContextProviderProps, TabulusContextValue };
