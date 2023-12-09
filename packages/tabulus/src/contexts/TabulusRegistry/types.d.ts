import type { TableManagerReturn } from '../TableManager';
import type {
  FindTableFunction,
  RegisterTableFunction,
  SimpleRowData,
  TabulusCompleteOptions,
  TabulusComponents,
  TabulusCustomComponents,
  TabulusOptions,
} from '@tabulus/types';
import type { MutableRefObject, ReactNode } from 'react';

/** Props to pass into the TabulusRegistry provider. */
interface TabulusRegistryProps {
  /** The components that will have access to the context. */
  readonly children: ReactNode;
  /** Default options to apply to any table within the context tree. */
  readonly options?: TabulusOptions;
  /** Default components to use for any table within the context tree. */
  readonly components?: TabulusCustomComponents;
}

/** The return value of the TabulusRegistry context. */
interface TabulusRegistryReturn {
  /**
   * The default options to use for all child tables unless overridden. This is a combination of
   * the options passed in as props, and the global default values.
   */
  readonly defaultOptions: TabulusCompleteOptions;
  /**
   * The default components to use for all child tables unless overridden. This is a combination of
   * the components passed in as props, and the global default values.
   */
  readonly defaultComponents: TabulusComponents;
  /** Function to retrieve a table instance managed by the registry. */
  readonly findTable: FindTableFunction;
  /**
   * Whether the registry has been initialized. It will still provide global defaults if there
   * is no provider in an application.
   */
  readonly initialized: boolean;
  /**
   * Function to register a table with the registry. Only once a table has been registered will
   * it be able to be fully managed.
   */
  readonly registerTable: RegisterTableFunction;
  /**
   * The tables object. Used internally for DevTool - omitted from output in hook.
   * @private
   */
  readonly tables: Record<string, MutableRefObject<TableManagerReturn<SimpleRowData>>>;
}

export type { TabulusRegistryProps, TabulusRegistryReturn };
