import type { GeneralColumnOptions } from './general';
import type { ColumnLayoutOptions } from './layout';
import type { RowDataBase } from '../row';
import type { DeepPartial } from 'ts-essentials';

/** Required options for ColumnDefinitions. */
interface ColumnOptionsRequired<RowData extends RowDataBase = RowDataBase> {
  /** The unique identifier for the column. Used as the key in the data. */
  id: keyof RowData;
  /** The text title to display in the header. */
  title: string;
}

/** All column options that can have defaults set. */
interface FullColumnConfig extends GeneralColumnOptions, ColumnLayoutOptions {}

/** A column in the table. */
interface ColumnDefinition<RowData extends RowDataBase = RowDataBase>
  extends DeepPartial<FullColumnConfig>,
    ColumnOptionsRequired<RowData> {
  columns?: Array<ColumnDefinition<RowData>>;
}

/** Options to lookup a column in utility functions. */
type ColumnLookup = string;

/** Options object for default column settings. */
type ColumnConfig = DeepPartial<FullColumnConfig>;

export type { ColumnConfig, ColumnDefinition, ColumnLookup, FullColumnConfig };
