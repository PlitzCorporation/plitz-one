import { Grid } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';

// Style
import hfStyles from '@styles/globalModules/fh.module.css';

// Logo importing
import PlitzLogo from '~/svg/Plitz7.svg';

// Navigation Structure
const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-plitz', label: 'About' },
];

const HeaderController = () => {
  return (
    <header>
      <div className={hfStyles.navContainer}>
        <Grid container spacing={0} justifyItems='center' alignItems='center'>
          <Grid item xs={12} sm={6} md={4}>
            <Link href='/' className={hfStyles.logoContainer}>
              <PlitzLogo width={120} height={40} />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <nav role='navigation'>
              <ul className={hfStyles.navList}>
                {navigationLinks.map((navItem, index) => (
                  <li key={index} className={hfStyles.navItem}>
                    <Link href={navItem.href} className={hfStyles.navItemLink}>
                      {navItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Grid>
        </Grid>
      </div>
    </header>
  );
};

export default HeaderController;
