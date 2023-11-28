import type { RowComponent, RowDataBase } from '@tabulus/types';

const createRowsFromData = <RowData extends RowDataBase>(
  data: RowData[],
): RowComponent<RowData>[] =>
  data.map((row, index) => {
    const rowIdFromData = row['id'];
    const rowId =
      typeof rowIdFromData === 'string' || typeof rowIdFromData === 'number'
        ? rowIdFromData
        : index;

    return { id: rowId, data: row };
  });

export { createRowsFromData };
