import 'little-state-machine';

import type { DevToolState } from './state';

/**
 * Inject custom state type into LSM to allow auto-complete for state.
 */
declare module 'little-state-machine' {
  interface GlobalState extends DevToolState {}
}
