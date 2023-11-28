import type { CellComponent } from './cell';
import type { RowComponent } from './row';
import type { FC } from 'react';

interface TableComponents {
  Cell: FC<CellComponent>;
  Row: FC<RowComponent>;
}

interface CustomComponents extends Partial<TableComponents> {}

export type { CustomComponents, TableComponents };
