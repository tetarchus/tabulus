import inject from '@stylexjs/dev-runtime';

if (process.env.NODE_ENV !== 'production') {
  inject({
    // configuration options
    classNamePrefix: 'x-',
    dev: true,
    test: false,
  });
}

export { DevTool } from './components';

export type { DevToolProps } from './components';
