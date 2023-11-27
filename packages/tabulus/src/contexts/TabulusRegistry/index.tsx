import { createContext, useCallback, useEffect, useMemo, useState } from 'react';

import { defaultOptions } from '@tabulus/config';
import { createTableOptions } from '@tabulus/utils';

import type { TabulusRegistryProviderProps, TabulusRegistryValue } from './types';
import type { TableManagerValue } from '../TableManager';
import type { TabulusCustomOptions } from '@tabulus/types';
import type { FC, MutableRefObject } from 'react';

const DEFAULT_CUSTOM_OPTIONS: TabulusCustomOptions = {};

/**
 * Initial value for the TabulusRegistry. As this is not a required context, this contains an
 * `initialized` prop to check that the registry has been set up before using the add table
 * function.
 */
const initialValue: TabulusRegistryValue = {
  defaultOptions,
  findTable: () => {
    /* Placeholder */
  },
  initialized: false,
  registerTable: () => {
    /* Placeholder */
  },
  tables: new Map(),
};

/** Context for storing all in-use tables in an application. */
const TabulusRegistryContext = createContext<TabulusRegistryValue>(initialValue);
TabulusRegistryContext.displayName = 'TabulusRegistry';

/**
 * Registry for all current tables on the site. Allows for accessing a table by ID, as well
 * as assisting with cross-table moving.
 */
const TabulusRegistry: FC<TabulusRegistryProviderProps> = ({
  children,
  defaultOptions: customOptions = DEFAULT_CUSTOM_OPTIONS,
}: TabulusRegistryProviderProps) => {
  //== State ==========================
  const [tables, setTables] = useState(new Map<string, MutableRefObject<TableManagerValue>>());
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

  const findTable: TabulusRegistryValue['findTable'] = useCallback(id => tables.get(id), [tables]);

  //== Memoized Context Value =========
  const managerValue = useMemo(
    () => ({ registerTable, defaultOptions: options, findTable, initialized: true, tables }),
    [findTable, options, registerTable, tables],
  );

  //== Provider =======================
  return (
    <TabulusRegistryContext.Provider value={managerValue}>
      {children}
    </TabulusRegistryContext.Provider>
  );
};

export { TabulusRegistry, TabulusRegistryContext };
export type { TabulusRegistryProviderProps, TabulusRegistryValue } from './types';
