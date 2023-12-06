import type { TableManagerReturn } from '../TableManager';
import type { SimpleRowData } from '@tabulus/types';
import type { ReactNode } from 'react';

/**
 * The props to pass to the TabulusProvider.
 */
interface TabulusProviderProps<RowData extends SimpleRowData> extends TableManagerReturn<RowData> {
  /** The components that will have access to the context. */
  readonly children: ReactNode;
}

/**
 * The return value of the TabulusProvider. Essentially provides the values that were input.
 */
interface TabulusProviderReturn<RowData extends SimpleRowData>
  extends TableManagerReturn<RowData> {}
