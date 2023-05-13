import clsx from 'clsx';
import Link from 'next/link';
import React, { Fragment, MouseEvent, useRef } from 'react';

// Styling
import hfStyles from '@styles/globalModules/fh.module.css';

interface MobileNavProps {
  navItems: NavItems[];
}

type NavItems = {
  href: string;
  label: string;
};

const MobileNav = (props: MobileNavProps) => {
  const { navItems } = props;
  const navRef = useRef<HTMLDivElement>(null);

  const onOpen = (e: MouseEvent) => {
    e.preventDefault();

    if (navRef) {
      navRef.current?.classList.add(`${hfStyles.mobileOpen}`);
      navRef.current?.classList.remove(`${hfStyles.mobileClose}`);
    }
  };

  const onClose = (e: MouseEvent) => {
    e.preventDefault();

    if (navRef) {
      navRef.current?.classList.add(`${hfStyles.mobileClose}`);
      navRef.current?.classList.remove(`${hfStyles.mobileOpen}`);
    }
  };

  return (
    <Fragment>
      <div className={hfStyles.openerContainer}>
        <button className={hfStyles.opener} onClick={onOpen}>
          <div className={hfStyles.openerLineOne}></div>
          <div className={hfStyles.openerLineTwo}></div>
          <div className={hfStyles.openerLineThree}></div>
        </button>
      </div>

      <div
        ref={navRef}
        className={clsx(
          `${hfStyles.mobileNavContainer}`,
          `${hfStyles.mobileClose}`
        )}
      >
        <button className={hfStyles.closer} onClick={onClose}>
          <div className={hfStyles.closeLineOne}></div>
          <div className={hfStyles.closeLineTwo}></div>
        </button>

        <nav role='navigation'>
          <ul className={hfStyles.mobileNavList}>
            {navItems.map((navItem, index) => (
              <li key={index} className={hfStyles.navMobileItem}>
                <Link
                  href={navItem.href}
                  onMouseUp={onClose}
                  className={hfStyles.navItemLink}
                >
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default MobileNav;
