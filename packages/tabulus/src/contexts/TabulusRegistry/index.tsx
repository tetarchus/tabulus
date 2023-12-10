import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type MutableRefObject,
} from 'react';

import { globalDefaultComponents } from '@tabulus/components/defaults';
import { globalDefaultTableOptions } from '@tabulus/config';
import { createTableComponents, createTableOptions } from '@tabulus/utils';

import { tabulusRegistryInitialValue } from './initialValue';

import type { TabulusRegistryProps, TabulusRegistryReturn } from './types';
import type { TableManagerReturn } from '../TableManager';
import type { FindTableFunction, RegisterTableFunction, SimpleRowData } from '@tabulus/types';

/**
 * The underlying context value for the TabulusRegistry. Provides global table management functions
 * and default option values.
 * @private
 */
const TabulusRegistryContext = createContext<TabulusRegistryReturn>(tabulusRegistryInitialValue);
TabulusRegistryContext.displayName = 'TabulusRegistry';

/**
 * Creates a global table management context provider for managing tables within an application.
 * @param param0 {@link TabulusRegistryProps|Props} to pass in when creating the registry. These
 * are default values that are passed down to any tables below the provider in the tree.
 * @returns A component tree wrapped in the {@link TabulusRegistryContext}.
 */
const TabulusRegistry = ({
  children,
  components: customComponents,
  options,
}: TabulusRegistryProps) => {
  //== State ==========================
  const [tables, setTables] = useState<
    Record<string, MutableRefObject<TableManagerReturn<SimpleRowData>>>
  >({});

  const [defaultOptions, setDefaultOptions] = useState(
    createTableOptions(globalDefaultTableOptions, options),
  );
  const [components, setComponents] = useState(
    createTableComponents(globalDefaultComponents, customComponents),
  );

  //== Side Effects ===================
  useEffect(
    () => setDefaultOptions(createTableOptions(globalDefaultTableOptions, options)),
    [options],
  );
  useEffect(
    () => setComponents(createTableComponents(globalDefaultComponents, customComponents)),
    [customComponents],
  );

  //== Functions ======================
  const registerTable: RegisterTableFunction = useCallback((id, table) => {
    setTables(previous => ({ ...previous, [id]: table }));
  }, []);

  const findTable: FindTableFunction<SimpleRowData> = useCallback(id => tables[id], [tables]);

  //== Memoized Context Value =========
  const registryValue = useMemo(
    () => ({
      defaultComponents: components,
      defaultOptions,
      findTable,
      initialized: true,
      registerTable,
      tables,
    }),
    [components, defaultOptions, findTable, registerTable, tables],
  );

  //== Provider Return ================
  return (
    <TabulusRegistryContext.Provider value={registryValue}>
      {children}
    </TabulusRegistryContext.Provider>
  );
};

export { TabulusRegistry, TabulusRegistryContext };
export { tabulusRegistryInitialValue } from './initialValue';
export type {
  TableRegister,
  TableRegisterEntry,
  TabulusRegistryProps,
  TabulusRegistryReturn,
} from './types';
