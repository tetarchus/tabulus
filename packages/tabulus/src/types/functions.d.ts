import type { CellFilter } from './cell';
import type { ColumnComponent, ColumnConfig, FullColumnConfig } from './column';
import type { TabulusOptions } from './options';
import type { RowComponent, RowDataBase } from './row';
import type { TableManagerValue } from '@tabulus/contexts';
import type { MutableRefObject, ReactNode } from 'react';

type GetTableOptionFunction = <K extends keyof TabulusOptions>(option: K) => TabulusOptions[K];

type GetColumnOptionFunction<RowData extends RowDataBase> = <K extends keyof ColumnConfig>(
  columnId: ColumnComponent<RowData>['id'],
  option: K,
) => FullColumnConfig[K];

type GetCellCountFunction = (filter?: CellFilter) => number;
type GetCellByIdFunction = (id: string | number) => number;

type ColumnsRenderFunction = (
  renderFunction: <RowData extends RowDataBase>(
    columnComponents: ColumnComponent<RowData>[],
  ) => ReactNode,
) => ReactNode;
type FooterRenderFunction = (renderFunction: () => ReactNode) => ReactNode;
type RowsRenderFunction = (
  renderFunction: <RowData extends RowDataBase>(
    rowComponents: RowComponent<RowData>[],
  ) => ReactNode,
) => ReactNode;

type FindTableFunction = <RowData extends RowDataBase>(
  id: string,
) => MutableRefObject<TableManagerValue<RowData>> | null;

type RegisterTableFunction = <RowData extends RowDataBase>(
  id: string,
  table: MutableRefObject<TableManagerValue<RowData>>,
) => void;

export type {
  ColumnsRenderFunction,
  FindTableFunction,
  FooterRenderFunction,
  GetCellByIdFunction,
  GetCellCountFunction,
  GetColumnOptionFunction,
  GetTableOptionFunction,
  RegisterTableFunction,
  RowsRenderFunction,
};
