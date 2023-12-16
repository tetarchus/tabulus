import type {
  ChainEvents,
  ConfirmEvents,
  Events,
  ExternalDispatchEvents,
  ExternalEvents,
  InternalDispatchEvents,
  InternalEvents,
} from '../events';
import type { SimpleRowData } from '../row';

/** Map of subscribed function to events. */
type SubscriptionMap<
  RowData extends SimpleRowData,
  EventType extends ExternalEvents<RowData> | InternalEvents,
> = {
  [K in keyof EventType]: Array<EventType[K]>;
};

/** Function that is called when subscription to an event changes.. */
type NotifySubsciberFunction<RowData extends SimpleRowData> = (
  eventName: keyof Events<RowData>,
  subscribed: boolean,
) => void;

/** Map of subscription notifiers to the events they are subscribed to. */
type SubscriptionNotifierMap<
  RowData extends SimpleRowData,
  EventType extends ExternalEvents<RowData> | InternalEvents,
> = {
  [K in keyof EventType]: Array<NotifySubsciberFunction<RowData>>;
};

/** Function that can be used to add/remove a new subscription. */
type EventSubscriptionFunction<RowData extends SimpleRowData, K = keyof Events<RowData>> = (
  eventName: K,
  callback: Events[K],
) => void;

/** Dispatch function for calling subscribed functions. */
type DispatchEventFunction<
  RowData extends SimpleRowData,
  EventType extends ExternalDispatchEvents<RowData> | InternalDispatchEvents,
  K extends keyof EventType = keyof EventType,
> = (eventName: K, ...params: Parameters<EventType[K]>) => void;

/** Dispatch function for calling subscribed chain functions. */
type DispatchChainEventFunction<
  RowData extends SimpleRowData,
  EventType extends ChainEvents<RowData> = ChainEvents<RowData>,
  K extends keyof EventType = keyof EventType,
> = (eventName: K, ...params: Parameters<EventType[K]>) => ReturnType<EventType[K]>;

/** Dispatch function for calling confirm functions. */
type DispatchConfirmEventFunction<
  RowData extends SimpleRowData,
  EventType extends ConfirmEvents<RowData> = ConfirmEvents<RowData>,
  K extends keyof EventType = keyof EventType,
> = (eventName: K, ...params: Parameters<EventType[K]>) => boolean;

export type {
  DispatchChainEventFunction,
  DispatchConfirmEventFunction,
  DispatchEventFunction,
  EventSubscriptionFunction,
  NotifySubsciberFunction,
  SubscriptionMap,
  SubscriptionNotifierMap,
};
