/** Typed reducer action data. */
interface ReducerAction<ActionType extends string, ActionPayload> {
  /** The name of the action. */
  type: ActionType;
  /** The data passed through for the action. */
  payload: ActionPayload;
}

export type { ReducerAction };
