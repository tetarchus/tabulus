/** The base type for RowData when no more specific type is provided. */
type SimpleRowData = Record<string, unknown>;

/** The type of a row, indicating whether it is standard table data, or header data. */
type RowType = 'header' | 'table';

// TODO: Add more options
/** Options to lookup a row in utility functions. */
type RowLookup = string;

/** Definition for a row containing additional data for row management. */
interface RowComponent<RowData extends SimpleRowData> {
  /** The value of the ID column. */
  id: string | number;
  /** The Row Data for the row. */
  data: RowData;
}

export { RowLookup, RowType, SimpleRowData };
