import type { ReactElement } from 'react';

/**
 * Typeguard to check if a value is a valid ReactElement.
 * @param value The value to test.
 * @returns Whether the given `value` is a {@link ReactElement} (or array containing ReactElements)
 */
const isReactComponent = (value: unknown): value is ReactElement | Iterable<ReactElement> => {
  const testValue = Array.isArray(value) ? value[0] : value;
  return (
    (typeof testValue === 'object' &&
      testValue &&
      (testValue as ReactElement | undefined)?.type != null) ||
    false
  );
};

export { isReactComponent };
export { isBorderOptionString } from './theme';
