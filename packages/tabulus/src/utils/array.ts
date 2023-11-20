/**
 * A more type-aware version of `Array.includes()` that allows a wider range of types in the
 * `searchElement` (in the standard version `searchElement` must be the same type as the array)
 * and uses type narrowing of the returned value.
 * @param array The array to check against.
 * @param searchElement The element to search the array for.
 * @param fromIndex The index of the array to search from.
 * @returns A boolean indicating whether the `searchElement` is in the `array`, type narrowed to
 * confirm it is one of the options in the `array`.
 */
const arrayIncludes = <U, T extends U>(
  array: readonly T[],
  searchElement: U,
  fromIndex?: number | undefined,
): searchElement is T => array.includes(searchElement as T, fromIndex);

export { arrayIncludes };
