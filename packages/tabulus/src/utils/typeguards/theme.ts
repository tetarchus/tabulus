import type { BorderOptions, BorderSides } from '@tabulus/types';

// TODO: Do we need to limit to the options here too (check they're a valid value)? Means we need
// to update the options in multiple places potentially.
/**
 * Typeguard to check whether the value of a `borderSides` property is one of the basic
 * string values.
 * @param borderSides A {@link BorderSides} option from the theme.
 * @returns Whether the `borderSides` contains a string {@link BorderOptions|BorderOption}.
 */
const isBorderOptionString = (borderSides: BorderSides): borderSides is BorderOptions =>
  typeof borderSides === 'string';

export { isBorderOptionString };
