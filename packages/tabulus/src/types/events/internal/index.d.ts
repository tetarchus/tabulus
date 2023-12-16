import type { InternalLifecycleDispatchEvents } from './lifecycle';

/** Internal events that are dispatched without expecting a return value. */
interface InternalDispatchEvents extends InternalLifecycleDispatchEvents {}

/** Internal events that are dispatched and pass on their value to the next callback in the chain. */
interface InternalChainEvents {}

/** Internal that can be dispatched and return a boolean indicating whether to continue. */
interface InternalConfirmEvents {}

/** All internal events. */
interface InternalEvents
  // InternalChainEvents,
  // InternalConfirmEvents,
  extends InternalDispatchEvents {}

export type { InternalChainEvents, InternalConfirmEvents, InternalDispatchEvents, InternalEvents };
