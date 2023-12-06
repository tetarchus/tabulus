import { create } from '@storybook/theming';

import logo from '../packages/shared/images/Logo@0.25x.png';

const sharedSettings = {
  brandImage: logo,
  brandTarget: '_self',
  brandTitle: 'Tabulus',
  // brandUrl: 'https://tabulus.',

  fontCode: 'monospace',

  inputBorderColor: '#CCCCCC',
  inputBorderRadius: 2,
};

const dark = create({ ...sharedSettings, base: 'dark', appContentBg: '#1D201F' });
const light = create({ ...sharedSettings, base: 'light', appContentBg: '#FFFFFF' });

export { dark, light };
