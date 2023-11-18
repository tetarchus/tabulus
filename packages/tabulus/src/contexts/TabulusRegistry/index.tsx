import { createContext, useCallback, useEffect, useMemo, useState } from 'react';

import { defaultOptions } from '@tabulus/config';
import { createTableOptions } from '@tabulus/utils';

import type { TabulusRegistryProviderProps, TabulusRegistryValue } from './types';
import type { FC } from 'react';

/**
 * Initial value for the TabulusRegistry. As this is not a required context, this contains an
 * `initialized` prop to check that the registry has been set up before using the add table
 * function.
 */
const initialValue: TabulusRegistryValue = {
  defaultOptions,
  initialized: false,
  registerTable: () => {
    /* Placeholder */
  },
  tables: new Map(),
};

/** Context for storing all in-use tables in an application. */
const TabulusRegistry = createContext<TabulusRegistryValue>(initialValue);
TabulusRegistry.displayName = 'TabulusRegistry';

/**
 * Registry for all current tables on the site. Allows for accessing a table by ID, as well
 * as assisting with cross-table moving.
 */
const TabulusRegistryProvider: FC<TabulusRegistryProviderProps> = ({
  children,
  defaultOptions: customOptions,
}: TabulusRegistryProviderProps) => {
  //== State ==========================
  const [tables, setTables] = useState(new Map<string, unknown>());
  const [options, setOptions] = useState(createTableOptions(customOptions, defaultOptions));

  //== Side Effects ===================
  useEffect(() => setOptions(createTableOptions(customOptions, defaultOptions)), [customOptions]);

  //== Functions ======================
  const registerTable: TabulusRegistryValue['registerTable'] = useCallback(
    (id, table) => {
      const newMap = new Map(tables);
      if (newMap.has(id)) {
        throw new Error(`Table '${id}' already exists.`);
      } else {
        newMap.set(id, table);
        setTables(newMap);
      }
    },
    [tables],
  );

  //== Memoized Context Value =========
  const managerValue = useMemo(
    () => ({ registerTable, defaultOptions: options, initialized: true, tables }),
    [options, registerTable, tables],
  );

  return <TabulusRegistry.Provider value={managerValue}>{children}</TabulusRegistry.Provider>;
};

export { TabulusRegistry, TabulusRegistryProvider };
export type { TabulusRegistryProviderProps, TabulusRegistryValue } from './types';
