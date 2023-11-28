import { storybookConfigBase } from '../main';

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  ...storybookConfigBase,
  stories: [
    '../../packages/tabulus/**/*.stories.@(js|jsx|mdx|mjs|ts|tsx)',
    '../../stories/**/*.mdx',
    '../../packages/tabulus/stories/**/*.mdx',
  ],
};

export default config;
