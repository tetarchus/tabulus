import { storybookConfigBase } from '../main';

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  ...storybookConfigBase,
  stories: [
    '../../app/docs/**/*.stories.@(js|jsx|mdx|mjs|ts|tsx)',
    '../../stories/**/*.mdx',
    '../../app/docs/stories/**/*.mdx',
  ],
};

export default config;
