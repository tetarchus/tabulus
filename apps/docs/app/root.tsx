import { cssBundleHref } from '@remix-run/css-bundle';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration as ScrollRestore,
} from '@remix-run/react';

import type { LinksFunction } from '@remix-run/node';

const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

const App = () => (
  <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <Meta />
      <Links />
    </head>
    <body>
      <Outlet />
      <ScrollRestore />
      <Scripts />
      <LiveReload />
    </body>
  </html>
);

export default App;
export { links };
