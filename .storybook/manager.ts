import { addons } from '@storybook/addons';

import { dark /* , light  */ } from './theme';

// https://storybook.js.org/docs/react/configure/features-and-behavior
addons.setConfig({
  enableShortcuts: true,
  initialActive: 'canvas',
  isFullscreen: false,
  panelPosition: 'right',
  selectedPanel: 'storybook/controls/panel',
  showNav: true,
  showPanel: true,
  showToolbar: true,
  sidebar: {
    collapsedRoots: ['docs'],
    showRoots: true,
  },
  theme: dark,
});
