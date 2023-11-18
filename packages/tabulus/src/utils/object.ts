import { isNil, omitBy } from 'lodash-es';

import type { CleanObject, EntriesToObject, EntriesType, ObjectType } from '@tabulus/types';

const objectKeys = <T extends object>(object: T): Array<keyof T> =>
  Object.keys(object) as Array<keyof T>;

const objectEntries = <
  O extends object,
  K = keyof O,
  V = O extends Record<string, infer L> ? L : never,
>(
  object: O,
): Array<[K, V]> => Object.entries(object) as unknown as Array<[K, V]>;

const fromEntries = <ARR_T extends EntriesType>(entries: ARR_T): EntriesToObject<ARR_T> =>
  Object.fromEntries(entries) as EntriesToObject<ARR_T>;

const cleanObject = <OBJ_T extends ObjectType>(object: OBJ_T): CleanObject<OBJ_T> =>
  omitBy(object, isNil) as CleanObject<OBJ_T>;

const fullClean = <OBJ_T extends ObjectType>(object: OBJ_T): CleanObject<OBJ_T> =>
  omitBy(cleanObject(object), (_value, key) => key.startsWith('_')) as CleanObject<OBJ_T>;

type ValidKey = number | string;

const swapKeyValue = <K extends ValidKey, V extends ValidKey>(object: Record<K, V>): Record<V, K> =>
  Object.fromEntries(Object.entries(object).map(([key, value]) => [value, key]));

export { cleanObject, fromEntries, fullClean, objectEntries, objectKeys, swapKeyValue };
