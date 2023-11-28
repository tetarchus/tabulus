import type { TableManagerValue } from '../TableManager';
import type {
  FindTableFunction,
  RegisterTableFunction,
  RowDataBase,
  TabulusCustomOptions,
  TabulusOptions,
} from '@tabulus/types';
import type { MutableRefObject, ReactNode } from 'react';

/** Value of the `TabulusRegistry` context that is provided to consumers. */
interface TabulusRegistryValue {
  /** Default options to pass down to any tables within the registry's tree. */
  readonly defaultOptions: TabulusOptions;
  /** Function to retrieve a reference to a registered table. */
  readonly findTable: FindTableFunction;
  /** Whether the registry has been initialized. */
  readonly initialized: boolean;
  /** Function to add a table to the registry. */
  readonly registerTable: RegisterTableFunction;
  /** Map containing all the available tables. */
  readonly tables: Record<string, MutableRefObject<TableManagerValue<RowDataBase>>>;
  // readonly tables: Map<string, MutableRefObject<TableManagerValue<RowData>>>;
}

/** Props to pass in to the `TabulusRegistryProvider` on initialization. */
interface TabulusRegistryProviderProps {
  /** Contents of the provider that will have access to the context. */
  readonly children: ReactNode;
  /** Default options to pass down to any tables within the registry's tree. */
  readonly defaultOptions?: TabulusCustomOptions;
}

export type { TabulusRegistryProviderProps, TabulusRegistryValue };
