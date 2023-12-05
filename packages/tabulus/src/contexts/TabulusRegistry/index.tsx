import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type MutableRefObject,
} from 'react';

import { globalDefaultComponents } from '@tabulus/components';
import { globalDefaultTableOptions } from '@tabulus/config';
import { createTableComponents, createTableOptions } from '@tabulus/utils';

import type { TabulusRegistryProps, TabulusRegistryReturn } from './types';
import type { TableManagerReturn } from '../TableManager';
import type { FindTableFunction, RegisterTableFunction, SimpleRowData } from '@tabulus/types';

const initialValue: TabulusRegistryReturn = {
  defaultComponents: globalDefaultComponents,
  defaultOptions: globalDefaultTableOptions,
  findTable: () => null,
  initialized: false,
  registerTable: () => {},
};

const TabulusRegistryContext = createContext<TabulusRegistryReturn>(initialValue);
TabulusRegistryContext.displayName = 'TabulusRegistry';

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
  const registerTable: RegisterTableFunction = useCallback(
    (id, table) => {
      const updatedTableRegister = { ...tables };
      tables[id] = table;
      setTables(updatedTableRegister);
    },
    [tables],
  );

  const findTable: FindTableFunction<SimpleRowData> = useCallback(id => tables[id], [tables]);

  //== Memoized Context Value =========
  const registryValue = useMemo(
    () => ({
      defaultComponents: components,
      defaultOptions,
      findTable,
      initialized: true,
      registerTable,
    }),
    [components, defaultOptions, findTable, registerTable],
  );

  //== Provider Return ================
  return (
    <TabulusRegistryContext.Provider value={registryValue}>
      {children}
    </TabulusRegistryContext.Provider>
  );
};

export { TabulusRegistry, TabulusRegistryContext };
export type { TabulusRegistryProps, TabulusRegistryReturn } from './types';
