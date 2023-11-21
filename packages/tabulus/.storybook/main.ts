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
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: getAbsolutePath('@storybook/react-vite') as '@storybook/react-vite',
    options: {},
  },
  managerHead: head => `
    ${head}
    <link href='https://fonts.googleapis.com' rel='preconnect' />
    <link crossOrigin='anonymous' href='https://fonts.gstatic.com' rel='preconnect' />
    <link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap' rel='stylesheet' />
    <link href='https://fonts.googleapis.com/css2?family=Smooch+Sans:wght@100;300;500;700&display=swap' rel='stylesheet' />
    <link href="https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap" rel="stylesheet"> 
    <style>
      * {
        font-family: 'Open Sans', 'Arial', sans-serif;
      }
    </style>
  `,
  previewHead: head => `
      ${head}
      <link href='https://fonts.googleapis.com' rel='preconnect' />
      <link crossOrigin='anonymous' href='https://fonts.gstatic.com' rel='preconnect' />
      <link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css2?family=Smooch+Sans:wght@100;300;500;700&display=swap' rel='stylesheet' />
      <link href="https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap" rel="stylesheet"> 
      <style>
        .sbdocs * {
          font-family: 'Open Sans', 'Arial', sans-serif;
        }
        .sbdocs h1, 
        .sbdocs h2, 
        .sbdocs h3, 
        .sbdocs h4, 
        .sbdocs h5, 
        .sbdocs h6 {
          font-family: 'Smooch Sans', sans-serif;
        }
      </style>
      `,
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  viteFinal: baseConfig => mergeConfig(baseConfig, viteConfig),
};
export default config;
