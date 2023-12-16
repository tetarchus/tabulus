/** Events used internally and in extensions. */
interface InternalLifecycleDispatchEvents {
  /**
   * Triggered when the table starts rendering.
   * @param tableId The ID of the table that is building.
   * @event table_building
   */
  table_building: (tableId: string) => void;
  /**
   * Triggered when the table completes rendering.
   * @param tableId The ID of the table that has been built.
   * @event table_built
   */
  table_built: (tableId: string) => void;
}

export type { InternalLifecycleDispatchEvents };
