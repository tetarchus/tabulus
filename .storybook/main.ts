import remarkGfm from 'remark-gfm';
import { mergeConfig } from 'vitest/config';

import { viteResolveConfig } from './vite.resolve';

import type { StorybookConfig } from '@storybook/react-vite';

const storybookConfigBase: Omit<StorybookConfig, 'stories'> = {
  addons: [
    '@geometricpanda/storybook-addon-badges',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    { name: '@storybook/addon-essentials', options: { docs: false } },
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-styling',
    '@storybook/addon-themes',
  ],
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: 'tag',
  },
  features: {
    buildStoriesJson: true,
    warnOnLegacyHierarchySeparator: true,
  },
  framework: {
    name: '@storybook/react-vite',
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
          font-family: 'Share Tech', sans-serif;
        }

        body.sb-show-main {
          background: #FFFFFF !important;
        }

        .dark body.sb-show-main {
          background: #1D201F !important;
        }
        
      </style>
      `,
  viteFinal: baseConfig =>
    mergeConfig(baseConfig, {
      ...viteResolveConfig,
    }),
};

export { storybookConfigBase };
