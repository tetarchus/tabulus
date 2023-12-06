import type { GeneralColumnOptions } from './general';
import type { ColumnLayoutOptions } from './layout';
import type { SimpleRowData } from '../row';
import type { DeepKeys } from '../util';
import type { DeepPartial } from 'ts-essentials';

/** Required options for ColumnDefinitions. */
interface ColumnOptionsRequired<RowData extends SimpleRowData> {
  /** The unique identifier for the column. Used as the key in the data. */
  id: DeepKeys<RowData> | string;
  /** The text title to display in the header. */
  title: string;
}

/** All column options that can have defaults set. */
interface FullColumnConfig extends GeneralColumnOptions, ColumnLayoutOptions {}

/** A column in the table. */
interface ColumnDefinition<RowData extends SimpleRowData>
  extends DeepPartial<FullColumnConfig>,
    ColumnOptionsRequired<RowData> {
  /** Nested columns for groups. */
  columns?: Array<ColumnDefinition<RowData>>;
}

/** Options object for default column settings. */
type ColumnConfig = DeepPartial<FullColumnConfig>;

export type { ColumnConfig, ColumnDefinition, FullColumnConfig };
export type { ColumnLookup } from './utils';
