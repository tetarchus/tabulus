import { json } from '@remix-run/node';

import logo from '@shared/images/Logo@0.25x.png';

import type { LoaderFunction } from '@remix-run/node';

const loader: LoaderFunction = async () => json({ title: 'Tabulus' });

const IndexRoute = () => (
  <div className='flex flex-col h-screen'>
    <div className='flex flex-col w-7/12 items-center justify-center mt-20 mx-auto'>
      <img alt='Tabulus Logo' src={logo} width={200} />
      <h1 className='font-title text-6xl'>Tabulus</h1>
      <div className='rounded-md shadow-md bg-gray-600 p-2 min-w-full mt-10'>
        <code className='text-gray-300 mr-4'>{'>'}</code>
        <code>npm i tabulus</code>
      </div>
    </div>
    <div className='w-full h-full bg-teal mt-10 p-4'>
      <h1 className='font-title'>Fabulus React Tables</h1>
      <p>Lorem ipsum</p>
    </div>
  </div>
);

export default IndexRoute;
export { loader };
