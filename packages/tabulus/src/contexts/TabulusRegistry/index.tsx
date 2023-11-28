import { createContext, useCallback, useEffect, useMemo, useState } from 'react';

import { defaultOptions } from '@tabulus/config';
import { createTableOptions } from '@tabulus/utils';

import type { TabulusRegistryProviderProps, TabulusRegistryValue } from './types';
import type { TableManagerValue } from '../TableManager';
import type { FindTableFunction, RegisterTableFunction, RowDataBase } from '@tabulus/types';
import type { FC, MutableRefObject } from 'react';

const DEFAULT_CUSTOM_OPTIONS = {};

/**
 * Initial value for the TabulusRegistry. As this is not a required context, this contains an
 * `initialized` prop to check that the registry has been set up before using the add table
 * function.
 */
const initialValue: TabulusRegistryValue = {
  defaultOptions,
  findTable: () => null,
  initialized: false,
  registerTable: () => {
    /* Placeholder */
  },
  tables: {},
};

/** Context for storing all in-use tables in an application. */
const TabulusRegistryContext = createContext<TabulusRegistryValue>(initialValue);
TabulusRegistryContext.displayName = 'TabulusRegistry';

// TODO: Move to types.
type TableMap = Record<string, MutableRefObject<TableManagerValue<RowDataBase>>>;

/**
 * Registry provider for all current tables on the site. Allows for accessing a table by ID,
 * as well as assisting with cross-table moving.
 */
const TabulusRegistry: FC<TabulusRegistryProviderProps> = ({
  children,
  defaultOptions: customOptions = DEFAULT_CUSTOM_OPTIONS,
}: TabulusRegistryProviderProps) => {
  //== State ==========================
  const [tables, setTables] = useState<TableMap>({});
  const [options, setOptions] = useState(createTableOptions(customOptions, defaultOptions));

  //== Side Effects ===================
  useEffect(() => setOptions(createTableOptions(customOptions, defaultOptions)), [customOptions]);

  //== Functions ======================
  const registerTable: RegisterTableFunction = useCallback(
    (id, table) => {
      const newMap = { ...tables };
      if (newMap[id] == null) {
        newMap[id] = table as TableMap[string];
        setTables(newMap);
      } else {
        throw new Error(`Table '${id}' already exists.`);
      }
    },
    [tables],
  );

  const findTable: FindTableFunction = useCallback(id => tables[id] ?? null, [tables]);

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
