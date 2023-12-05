import type { TabulusComponents } from '../component';
import type { SimpleRowData } from '../row';

/**
 * Function for getting the React component to use for a particular table component.
 */
type GetComponentFunction<RowData extends SimpleRowData> = <
  K extends keyof TabulusComponents<RowData>,
>(
  component: K,
) => TabulusComponents<RowData>[K];

export type { GetComponentFunction };
