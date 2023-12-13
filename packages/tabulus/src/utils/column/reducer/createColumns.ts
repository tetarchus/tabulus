import type { ColumnComponent, ColumnDefinition, SimpleRowData } from '@tabulus/types';

/**
 * Creates {@link ColumnComponent}s from definitions.
 * @param definitions The original {@link ColumnDefinition}s to create the
 * {@link ColumnComponent}s from.
 * @returns An array of {@link ColumnComponent}s.
 */
const createColumnsFromDefinitions = <RowData extends SimpleRowData>(
  definitions: readonly ColumnDefinition<RowData>[],
): ColumnComponent<RowData>[] => definitions.map(defninition => ({ ...defninition, cells: [] }));

/**
 * Extracts the IDs from an array of {@link ColumnComponent}s in order.
 * @param columns The {@link ColumnComponent}s to create the order from.
 * @returns An array of ID strings based on the order of the input columns.
 */
const getColumnOrder = <RowData extends SimpleRowData>(
  columns: readonly ColumnDefinition<RowData>[] | ColumnComponent<RowData>[],
): string[] => columns.map(column => column.id);

export { createColumnsFromDefinitions, getColumnOrder };
