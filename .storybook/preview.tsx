import { themes } from '@tabulus/theme';
import { ThemeProvider } from '@tabulus/utils';

import type { Preview, ReactRenderer, StrictArgs } from '@storybook/react';
import type { DecoratorFunction, PartialStoryFn } from '@storybook/types';
import type { JSX } from 'react';

const decorators: DecoratorFunction<ReactRenderer, StrictArgs>[] = [
  (Story: PartialStoryFn<ReactRenderer, StrictArgs>): JSX.Element => (
    <ThemeProvider theme={themes.standard}>
      <Story />
    </ThemeProvider>
  ),
];

const storybookPreviewBase: Preview = {
  decorators,
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/iu,
        date: /date$/iu,
      },
    },
  },
};

export { storybookPreviewBase };
