import type {
  CellType,
  ColumnDefinition,
  FullColumnConfig,
  GetBoundColumnOptionFunction,
  SimpleRowData,
} from '@tabulus/types';

/** Props for the CellContainer styled component. */
interface CellContainerProps {
  /** How to align the content horizontally in the cell. */
  readonly $horizontalAlign: FullColumnConfig['horizontalAlign'];
  /** The type of cell to display. */
  readonly $type: CellType;
  /** How to align the content vertically in the cell. */
  readonly $verticalAlign: FullColumnConfig['verticalAlign'];
  /** Whether the cell should be visible. */
  readonly $visible: FullColumnConfig['visible'];
}

/** Props for the Cell component. */
interface CellProps<RowData extends SimpleRowData> {
  /** The ID of the column that the cell belongs to. */
  readonly columnId: ColumnDefinition<RowData>['id'];
  /** Function to get the value of a column option for the column the cell belongs to. */
  readonly getColumnOption: GetBoundColumnOptionFunction;
  /** The index of the row that the cell belongs to. */
  readonly rowIndex: number;
  /** The type of cell to display. */
  readonly type: CellContainerProps['$type'];
  /** The value of the cell. */
  // TODO: Sort out this type.
  readonly value: unknown; //CellValue | CellValueFunction<CellValue> | string | null | undefined;
}

export type { CellContainerProps, CellProps };
