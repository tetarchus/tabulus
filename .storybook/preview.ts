import type { Preview } from '@storybook/react';

const storybookPreviewBase: Preview = {
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
