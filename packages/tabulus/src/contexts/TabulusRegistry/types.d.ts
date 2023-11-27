import type { TableManagerValue } from '../TableManager';
import type { TabulusCustomOptions, TabulusOptions } from '@tabulus/types';
import type { MutableRefObject, ReactNode } from 'react';

/** Value of the `TabulusRegistry` context that is provided to consumers. */
interface TabulusRegistryValue {
  /** Default options to pass down to any tables within the registry's tree. */
  readonly defaultOptions: TabulusOptions;
  /** Function to retrieve a reference to a registered table. */
  readonly findTable: (id: string) => MutableRefObject<TableManagerValue> | undefined | void;
  /** Whether the registry has been initialized. */
  readonly initialized: boolean;
  // TODO: Figure out what the type of table
  /** Function to add a table to the registry. */
  readonly registerTable: (id: string, table: MutableRefObject<TableManagerValue>) => void;
  // TODO: Figure out what we store against the ID here.
  /** Map containing all the available tables. */
  readonly tables: Map<string, MutableRefObject<TableManagerValue>>;
}

/** Props to pass in to the `TabulusRegistryProvider` on initialization. */
interface TabulusRegistryProviderProps {
  /** Contents of the provider that will have access to the context. */
  readonly children: ReactNode;
  /** Default options to pass down to any tables within the registry's tree. */
  readonly defaultOptions?: TabulusCustomOptions;
}

export type { TabulusRegistryProviderProps, TabulusRegistryValue };
