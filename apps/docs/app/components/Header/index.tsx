import { Link, useLocation } from '@remix-run/react';
import { FaDiscord, FaGithub } from 'react-icons/fa6/index.js';

import logo from '@shared/images/Logo@0.25x.png';

import { HeaderLink } from '../HeaderLink';

import type { FC } from 'react';

const SOCIAL_LINK_CLASSES = 'text-white hover:text-white/80';

/** Standard page header. */
const Header: FC = () => {
  const currentLocation = useLocation();

  return (
    <div className='absolute top-0 flex justify-between items-center w-full py-2 px-4 bg-dark'>
      {/* Logo - hide on homepage*/}
      {currentLocation.pathname === '/' ? (
        <div className='w-[94px]' />
      ) : (
        <Link to='/'>
          <div className='flex gap-2 items-center'>
            <img alt='Tabulus Logo' src={logo} width={30} />
            <h3 className='font-title text-2xl'>Tabulus</h3>
          </div>
        </Link>
      )}
      {/* Nav */}
      <nav className='flex font-title text-2xl list-none'>
        <HeaderLink href='./docs' text='Docs' />
        <HeaderLink href='./examples' text='Examples' />
        <HeaderLink href='./faq' text='FAQ' />
      </nav>
      {/* Socials */}
      <div className='flex gap-3 pl-[22px]'>
        <a className={SOCIAL_LINK_CLASSES} href='https://discord.gg/hc5dMPgrWf'>
          <FaDiscord size={'30px'} />
        </a>
        <a className={SOCIAL_LINK_CLASSES} href='https://github.com/tetarchus/tabulus'>
          <FaGithub size={'30px'} />
        </a>
      </div>
    </div>
  );
};

export { Header };
