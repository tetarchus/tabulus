import { isEqual } from 'lodash-es';
import { createContext, useCallback, useEffect, useMemo, useRef } from 'react';

import { globalDefaultComponents } from '@tabulus/components/defaults';
import { globalDefaultTableOptions } from '@tabulus/config';
import { createTableComponents, createTableOptions } from '@tabulus/utils';

import { tabulusRegistryInitialValue } from './initialValue';

import type { TableRegister, TabulusRegistryProps, TabulusRegistryReturn } from './types';
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
  const tables = useRef<TableRegister>({});
  const defaultOptions = useRef(createTableOptions(globalDefaultTableOptions, options));
  const components = useRef(createTableComponents(globalDefaultComponents, customComponents));

  //== Side Effects ===================
  useEffect(() => {
    const newOptions = createTableOptions(globalDefaultTableOptions, options);
    if (!isEqual(newOptions, defaultOptions.current)) {
      defaultOptions.current = newOptions;
    }
  }, [options]);

  useEffect(() => {
    const newComponents = createTableComponents(globalDefaultComponents, customComponents);
    if (!isEqual(newComponents, components.current)) {
      components.current = newComponents;
    }
  }, [customComponents]);

  //== Functions ======================
  const registerTable: RegisterTableFunction = useCallback((id, table) => {
    const newTables = { ...tables.current, [id]: table };
    tables.current = newTables;
  }, []);

  const findTable: FindTableFunction<SimpleRowData> = useCallback(
    id => tables.current[id],
    [tables],
  );

  //== Memoized Context Value =========
  const registryValue = useMemo(
    () => ({
      defaultComponents: components.current,
      defaultOptions: defaultOptions.current,
      findTable,
      initialized: true,
      registerTable,
      tables: tables.current,
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
