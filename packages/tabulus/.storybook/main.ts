import { createRequire } from 'node:module';
import { join, dirname } from 'node:path';

import { mergeConfig } from 'vite';

import { viteConfig } from '../vite.config';

import type { StorybookConfig } from '@storybook/react-vite';

const esmRequire = createRequire(import.meta.url);

function getAbsolutePath(value: string): string {
  return dirname(esmRequire.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite') as '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: baseConfig => mergeConfig(baseConfig, viteConfig),
};
export default config;
