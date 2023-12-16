import type { ExternalColumnEvents } from './column';
import type { SimpleRowData } from '../../row';

/** Standard table events that dispatch subscribers without any return value. */
interface ExternalDispatchEvents<RowData extends SimpleRowData>
  extends ExternalColumnEvents<RowData> {}

/** All external events. */
interface ExternalEvents<RowData extends SimpleRowData> extends ExternalDispatchEvents<RowData> {}

export type { ExternalDispatchEvents, ExternalEvents };
