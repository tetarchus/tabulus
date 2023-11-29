import { themes } from '@tabulus/theme';
import {
  createColumnsFromDefinitions,
  createRowsFromData,
  createTableOptions,
  setTableTheme,
} from '@tabulus/utils';

import type { TableManagerActions } from './actions';
import type { TableManagerState } from '@tabulus/contexts';
import type {
  RowDataBase,
  TabulusCustomOptions,
  TabulusOptions,
  TabulusProps,
} from '@tabulus/types';

// TODO: Move this
interface TableManagerStateInitialValue<RowData extends RowDataBase>
  extends Omit<TableManagerState<RowData>, 'columns' | 'options' | 'rows'> {
  options: TabulusCustomOptions;
}

// TODO: MOVE THESE
const DEFAULT_USER_EVENTS = {};
const DEFAULT_USER_OPTIONS = {};

const tableManagerInitial = <RowData extends RowDataBase>({
  columns,
  data,
  events = DEFAULT_USER_EVENTS,
  id,
  options = DEFAULT_USER_OPTIONS,
}: TabulusProps<RowData>): TableManagerStateInitialValue<RowData> => ({
  columnDefinitions: columns,
  data,
  events: events,
  id,
  options: options,
  theme: themes.standard,
});

const setTableManagerStateInitialValue =
  <RowData extends RowDataBase>(defaultOptions: TabulusOptions) =>
  (init: TableManagerStateInitialValue<RowData>) => {
    const { columnDefinitions, data: baseData, options: tableOptions } = init;
    const fullOptions = createTableOptions(tableOptions, defaultOptions);

    return {
      ...init,
      columns: createColumnsFromDefinitions(columnDefinitions),
      options: fullOptions,
      rows: createRowsFromData(baseData),
      theme: setTableTheme(fullOptions.theme),
    } satisfies TableManagerState<RowData>;
  };

const tableManagerReducer = <RowData extends RowDataBase>(
  state: TableManagerState<RowData>,
  action: TableManagerActions<RowData>,
) => {
  switch (action.type) {
    case 'set_columns': {
      const { columns } = action;
      return { ...state, columns };
    }
    case 'set_data': {
      const { data } = action;
      return { ...state, data };
    }
    case 'set_events': {
      const { events } = action;
      return { ...state, events };
    }
    case 'set_id': {
      const { id } = action;
      return { ...state, id };
    }
    case 'set_options': {
      const { defaultOptions, options } = action;
      const tableOptions = createTableOptions(options, defaultOptions);
      const theme = setTableTheme(tableOptions.theme);
      return { ...state, options: tableOptions, theme };
    }
  }
};

export { setTableManagerStateInitialValue, tableManagerInitial, tableManagerReducer };
export type { TableManagerActions } from './actions';
