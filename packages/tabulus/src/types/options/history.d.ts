type HistoryTypes =
  | 'cell_edit'
  | 'column_add'
  | 'column_move'
  | 'column_remove'
  | 'row_add'
  | 'row_delete'
  | 'row_move';

/** Table Options relating to interaction history storage. */
interface TableHistoryOptions {
  /**
   * Whether to enable interaction history on the table.
   * - `boolean`: Turn on (`true`) or off (`false`) all history logging.
   * - `array`: An array of {@link HistoryTypes} to log history for.
   * @default true
   */
  history: boolean | HistoryTypes[];
  /**
   * The number of `undo` operations that are stored at a time. Once this limit is reached, new
   * operations will push the oldest ones off the history stack.
   * @default 10
   */
  historySize: number;
}

export type { TableHistoryOptions };
