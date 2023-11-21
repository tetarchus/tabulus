import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration as ScrollRestore,
} from '@remix-run/react';

import { Header } from '@docs/components';
import cssStyles from '@docs/styles/tailwind.css';

import type { LinksFunction, MetaFunction } from '@remix-run/node';

const meta: MetaFunction = () => [
  { title: 'Tabulus' },
  { name: 'description', content: 'Fabulous React Tables!' },
];

const links: LinksFunction = () => [{ rel: 'stylesheet', href: cssStyles }];

const App = () => (
  <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#00C7AC' />
      <meta name='msapplication-TileColor' content='#00aba9' />
      <meta name='theme-color' content='#00C7AC' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
      <link
        href='https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Smooch+Sans:wght@100;300;500;700&display=swap'
        rel='stylesheet'
      />
      <Meta />
      <Links />
    </head>
    <body className='bg-dark text-white'>
      <Header />
      <main>
        <Outlet />
      </main>
      <ScrollRestore />
      <LiveReload />
      <Scripts />
    </body>
  </html>
);

export default App;
export { links, meta };
