import { createContext } from 'react';

import { tableManagerInitialValue } from '../TableManager';

import type { TabulusProviderProps, TabulusProviderReturn } from './types';
import type { SimpleRowData } from '@tabulus/types';

/**
 * Context for providing values and methods to custom table implementations.
 * @private
 */
const TabulusContext =
  createContext<TabulusProviderReturn<SimpleRowData>>(tableManagerInitialValue);
TabulusContext.displayName = 'TabulusProvider';

/**
 * Creates a context provider for passing down values and method for a custom table instance.
 * @param param0 {@link TabulusProviderProps} for passing down the table methods.
 * @returns A component tree wrapped in the context.
 */
const TabulusProvider = ({ children, ...props }: TabulusProviderProps<SimpleRowData>) => (
  <TabulusContext.Provider value={props}>{children}</TabulusContext.Provider>
);

export { TabulusContext, TabulusProvider };
export type { TabulusProviderProps, TabulusProviderReturn } from './types';
