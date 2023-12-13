import type { ColumnDefinition } from './definition';
import type { CellComponent } from '../cell';
import type { SimpleRowData } from '../row';

interface ColumnComponent<RowData extends SimpleRowData> extends ColumnDefinition<RowData> {
  cells: CellComponent[];
}

export { ColumnComponent };
