import type { ColumnComponent } from '../../column';
import type { SimpleRowData } from '../../row';

/** External events that relate to columns. */
interface ExternalColumnEvents<RowData extends SimpleRowData> {
  /**
   * The `columnMoved` event is triggered when a column has been moved successfully.
   * @param column The {@link ColumnComponent} that has been moved.
   * @param columns Array of {@link ColumnComponent}s in the new order.
   * @event columnMoved
   */
  columnMoved: (column: ColumnComponent<RowData>, columns: ColumnComponent<RowData>[]) => void;
  /**
   * The `columnVisibilityChanged` event is triggered when a column is made visible/hidden.
   * @param column The {@link ColumnComponent} that has had its visibility changed.
   * @param visible The new visibility of the column.
   */
  columnVisibilityChanged: (column: ColumnComponent<RowData>, visible: boolean) => void;
}

export type { ExternalColumnEvents };
