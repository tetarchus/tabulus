import { mergeWith } from 'lodash-es';

import { themes } from '@tabulus/theme';

import type { TabulusCompleteOptions, Theme } from '@tabulus/types';

/**
 * Placeholder merge function for use with {@link mergeWith}.
 * @private
 */
const themeMergeFunction = () => {};

/**
 * Gets the {@link Theme} object to use for the table.
 * @param theme The value of the `theme` option from the table options.
 * @returns An assembled or pre-built {@link Theme} to use for the table.
 * @private
 */
const setTableTheme = (theme: TabulusCompleteOptions['theme']): Theme => {
  if (typeof theme === 'string') {
    return themes[theme] ?? themes.standard;
  } else if (typeof theme === 'object' && 'baseTheme' in theme) {
    const { baseTheme = 'standard' } = theme;
    const baseThemeObject = themes[baseTheme];
    return mergeWith({}, baseThemeObject, theme, themeMergeFunction);
  } else if (typeof theme === 'object') {
    return theme;
  } else {
    return themes.standard;
  }
};

export { setTableTheme };
