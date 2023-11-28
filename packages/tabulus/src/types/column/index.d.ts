import type { GeneralColumnOptions } from './general';
import type { ColumnLayoutOptions } from './layout';
import type { RowDataBase } from '../row';
import type { DeepPartial } from 'ts-essentials';

/** Required options for ColumnDefinitions. */
interface ColumnOptionsRequired<RowData extends RowDataBase> {
  /** The unique identifier for the column. Used as the key in the data. */
  id: keyof RowData;
  /** The text title to display in the header. */
  title: string;
}

/** All column options that can have defaults set. */
interface FullColumnConfig extends GeneralColumnOptions, ColumnLayoutOptions {}

/** A column in the table. */
interface ColumnDefinition<RowData extends RowDataBase>
  extends DeepPartial<FullColumnConfig>,
    ColumnOptionsRequired<RowData> {
  columns?: Array<ColumnDefinition<RowData>>;
}

/** Options object for default column settings. */
type ColumnConfig = DeepPartial<FullColumnConfig>;

/**
 *  Column data that is passed around with access to methods and data specific to the column.
 */
interface ColumnComponent<RowData extends RowDataBase> {
  /** The unique ID of the column. */
  readonly id: keyof RowData;
  /** The title to display in the header. */
  readonly title: string;
}

export type { ColumnComponent, ColumnConfig, ColumnDefinition, FullColumnConfig };
export type { ColumnLookup } from './utils';
