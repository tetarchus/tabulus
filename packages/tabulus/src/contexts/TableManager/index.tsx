import { createContext } from 'react';

import { useTabulus } from '@tabulus/hooks';

import { tableManagerInitialValue } from './initialValue';

import type { TableManagerProps, TableManagerReturn } from './types';
import type { SimpleRowData } from '@tabulus/types';

/**
 * Context for providing values and methods to a table instance.
 * @private
 */
const TableManagerContext =
  createContext<TableManagerReturn<SimpleRowData>>(tableManagerInitialValue);
TableManagerContext.displayName = 'TableManager';

/**
 * Creates a context provider wrapper for a table instance.
 * @param param0 The {@link TableManagerProps} to pass in to the context provider.
 * @returns A context wrapped component tree.
 * @private
 */
const TableManager = <RowData extends SimpleRowData>({
  children,
  ...props
}: TableManagerProps<RowData>) => {
  const managerValue = useTabulus(props);

  //== Provider Return ==============
  return (
    <TableManagerContext.Provider value={managerValue}>{children}</TableManagerContext.Provider>
  );
};

export { TableManager, TableManagerContext };
export { tableManagerInitialValue } from './initialValue';
export type { TableManagerProps, TableManagerReturn } from './types';
