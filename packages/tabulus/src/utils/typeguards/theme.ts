import type { BorderOptions, Theme } from '@tabulus/types';

// TODO: Do we need to limit to the options here too? Means we need to update the options in multiple places potentially.
const isBorderOptionString = (
  borderSides: Theme['borders']['borderSides'],
): borderSides is BorderOptions => typeof borderSides === 'string';

export { isBorderOptionString };
