import { mergeWith } from 'lodash-es';

import { standard } from './standard';

import type { TabulusOptions, Theme } from '@tabulus/types';

/**
 * The available pre-built themes that can be used for the table.
 */
const themes = { standard };

/**
 * Gets the {@link Theme} object to use for the table.
 * @param theme The value of the `theme` option from the table options.
 * @returns An assembled or pre-built {@link Theme} to use for the table.
 */
const setTableTheme = (theme: TabulusOptions['theme']): Theme => {
  if (typeof theme === 'string') {
    return themes[theme] ?? themes.standard;
  } else if (typeof theme === 'object' && 'baseTheme' in theme) {
    const { baseTheme = 'standard' } = theme;
    const baseThemeObject = themes[baseTheme];
    return mergeWith(baseThemeObject, theme, () => {});
  } else if (typeof theme === 'object') {
    return theme;
  } else {
    return themes.standard;
  }
};

export { setTableTheme, themes };
