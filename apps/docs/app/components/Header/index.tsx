import { Link } from '@remix-run/react';
import { FaDiscord, FaGithub } from 'react-icons/fa6/index.js';

import logo from '@docs/images/Logo@0.25x.png';

import type { HeaderProps } from './types';
import type { FC } from 'react';

const Header: FC<HeaderProps> = () => {
  return (
    <div className='absolute top-0 flex justify-between items-center w-full py-2 px-4 bg-dark'>
      {/* Logo */}
      <div className='flex gap-2 items-center'>
        <img alt='Tabulus Logo' src={logo} width={30} />
        <h3 className='font-title text-2xl'>Tabulus</h3>
      </div>
      {/* Nav */}
      <nav className='flex font-title text-2xl list-none'>
        <Link className='hover:bg-teal hover:text-dark px-4' to={'./docs'}>
          Docs
        </Link>
        <Link className='hover:bg-teal hover:text-dark px-4' to={'./examples'}>
          Examples
        </Link>
        <Link className='hover:bg-teal hover:text-dark px-4' to={'./faq'}>
          FAQ
        </Link>
      </nav>
      {/* Socials */}
      <div className='flex gap-3'>
        <a className='text-white hover:text-white/80' href='https://discord.gg/hc5dMPgrWf'>
          <FaDiscord size={'30px'} />
        </a>
        <a className='text-white hover:text-white/80' href='https://github.com/tetarchus/tabulus'>
          <FaGithub size={'30px'} />
        </a>
      </div>
    </div>
  );
};

export { Header };
export type { HeaderProps } from './types';
