import type { RowDataBase } from './row';

/** Definition for a column in the table. */
interface ColumnDefinition<RowData extends RowDataBase> {
  /** The unique identifier for the column. Used as the key in the data. */
  id: keyof RowData;
  /** The text title to display in the header. */
  title: string;
}

/** Options to lookup a column in utility functions. */
type ColumnLookup = string;

/** Options object for default column settings. */
type ColumnConfig = Omit<ColumnDefinition, 'id' | 'title'>;

export type { ColumnConfig, ColumnDefinition, ColumnLookup };
