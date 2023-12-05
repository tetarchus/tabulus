import { useContext, type Context } from 'react';

import { TableManagerContext } from '@tabulus/contexts';

import type { TableManagerReturn } from '@tabulus/contexts';
import type { SimpleRowData } from '@tabulus/types';

/**
 * Returns a typed version of the {@link TableManagerContext} that wraps the consumer calling this
 * hook.
 * @returns The contents of a parent {@link TableManagerContext}.
 * @private
 */
const useTableManager = <RowData extends SimpleRowData>() =>
  useContext<TableManagerReturn<RowData>>(
    TableManagerContext as unknown as Context<TableManagerReturn<RowData>>,
  );

export { useTableManager };
