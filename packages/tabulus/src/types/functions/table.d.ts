import type { SimpleRowData } from '../row';
import type { TableManagerReturn } from '@tabulus/contexts';
import type { MutableRefObject } from 'react';

/** Function to register a table with the TabulusRegistry. */
type RegisterTableFunction = (
  id: string,
  table: MutableRefObject<TableManagerReturn<SimpleRowData>>,
) => void;

/** Function to find a table stored in the TabulusRegistry. */
type FindTableFunction<RowData extends SimpleRowData> = (
  id: string,
) => MutableRefObject<TableManagerReturn<RowData>> | undefined;

export type { FindTableFunction, RegisterTableFunction };
