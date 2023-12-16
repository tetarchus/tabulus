import type { ExternalDispatchEvents, ExternalEvents } from './external';
import type {
  InternalChainEvents,
  InternalConfirmEvents,
  InternalDispatchEvents,
  InternalEvents,
} from './internal';
import type { SimpleRowData } from '../row';

/** All events that can be dispatched without expecting a return value. */
interface DispatchEvents<RowData extends SimpleRowData>
  extends ExternalDispatchEvents<RowData>,
    InternalDispatchEvents {}

/** All events that can be dispatched and pass their return value on to the next item in the chain. */
interface ChainEvents extends InternalChainEvents {}

/** All events that can be dispatched and indicate whether to continue by returning a boolean. */
interface ConfirmEvents extends InternalConfirmEvents {}

/** All events. */
interface Events<RowData extends SimpleRowData> extends ExternalEvents<RowData>, InternalEvents {}

export type { ChainEvents, ConfirmEvents, DispatchEvents, Events };
export type { ExternalDispatchEvents, ExternalEvents } from './external';
export type {
  InternalChainEvents,
  InternalConfirmEvents,
  InternalDispatchEvents,
  InternalEvents,
} from './internal';
