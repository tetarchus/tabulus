type RowDataBase = Record<string, unknown>;

interface RowComponent<RowData extends RowDataBase> {
  /** The value of the ID field for the row. */
  id: string | number;
  /** The row definition object. */
  data: RowData;
  // TODO: Define functions performed on a row.
}

export type { RowComponent, RowDataBase };
