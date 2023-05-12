import { Grid } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';

// Style
import hfStyles from '@styles/globalModules/fh.module.css';

// Helpers
import useDevice from '@lib/customHooks/useDevice';

import MobileNav from '@components/layout/MobileNav';

// Logo importing
import PlitzLogo from '~/svg/Plitz7.svg';

// Navigation Structure
const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-plitz', label: 'About' },
];

const HeaderController = () => {
  const currentDevice = useDevice();

  return (
    <header className='headerClass'>
      <div className={hfStyles.navContainer}>
        <Grid container spacing={0} justifyItems='center' alignItems='center'>
          <Grid item xs={7} sm={6} md={4}>
            <Link href='/' className={hfStyles.logoContainer}>
              <PlitzLogo width={120} height={40} />
            </Link>
          </Grid>
          <Grid item xs={5} sm={6} md={8}>
            {currentDevice !== 'mobile' ? (
              <nav role='navigation'>
                <ul className={hfStyles.navList}>
                  {navigationLinks.map((navItem, index) => (
                    <li key={index} className={hfStyles.navItem}>
                      <Link
                        href={navItem.href}
                        className={hfStyles.navItemLink}
                      >
                        {navItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : (
              <MobileNav navItems={navigationLinks} />
            )}
          </Grid>
        </Grid>
      </div>
    </header>
  );
};

export default HeaderController;
