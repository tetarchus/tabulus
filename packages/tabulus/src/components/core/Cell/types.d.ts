import type {
  CellType,
  CellValueFunction,
  ColumnDefinition,
  FullColumnConfig,
  GetBoundColumnOptionFunction,
  SimpleRowData,
} from '@tabulus/types';

/** Props for the Cell component. */
interface CellProps<RowData extends SimpleRowData, CellValue extends RowData[string]> {
  /** The ID of the column that the cell belongs to. */
  readonly columnId: ColumnDefinition<RowData>['id'];
  /** Function to get the value of a column option for the column the cell belongs to. */
  readonly getColumnOption: GetBoundColumnOptionFunction<RowData>;
  /** The index of the row that the cell belongs to. */
  readonly rowIndex: number;
  /** The type of cell to display. */
  readonly type: CellType;
  /** The value of the cell. */
  // TODO: Sort out this type.
  readonly value: CellValue | CellValueFunction<CellValue> | string | null | undefined;
}

interface CellContainerProps
  extends Pick<FullColumnConfig, 'horizontalAlign' | 'verticalAlign' | 'visible'> {}

export type { CellContainerProps, CellProps };
