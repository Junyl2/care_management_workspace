'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import classNames from 'classnames';

import styles from './Navbar.module.css';
import { navLinks, serviceLinks, service } from '@/lib/constants';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  toggleMobile,
  toggleServices,
  closePanels,
} from '@/store/features/uiSlice';

const Navbar = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const navRef = useRef<HTMLDivElement>(null);

  const mobileOpen = useAppSelector((state) => state.ui.mobileOpen);
  const servicesOpen = useAppSelector((state) => state.ui.servicesOpen);

  useEffect(() => {
    if (pathname === '/services') {
      dispatch(toggleServices());
    }
  }, [pathname, dispatch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        dispatch(closePanels());
      }
    };

    if (mobileOpen || servicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileOpen, servicesOpen, dispatch]);

  return (
    <nav className={styles.nav} ref={navRef}>
      <div className="container">
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Care Management"
                height={37}
                width={149}
                className={styles.Logo}
              />
            </Link>
          </div>

          <button
            className={styles.hamburger}
            onClick={() => dispatch(toggleMobile())}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>

          <ul className={styles.menu}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={classNames(styles.navLink, {
                    [styles.active]: pathname === link.path,
                  })}
                  onClick={() => dispatch(closePanels())}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/services"
                className={classNames(styles.dropdown, styles.navLink, {
                  [styles.active]: pathname === service.path,
                })}
              >
                <span
                  className={classNames(styles.dropdownToggle, {
                    [styles.active]: servicesOpen,
                  })}
                  onClick={
                    pathname === service.path
                      ? () => dispatch(toggleServices())
                      : undefined
                  }
                >
                  {service.name}
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {servicesOpen && (
          <ul className={styles.dropdownMenu}>
            {serviceLinks.map((link, index) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={() => dispatch(closePanels())}
                  className={styles.subMenu}
                >
                  <Image
                    src={`/images/services/${index + 1}.jpg`}
                    alt={link.name}
                    width={130}
                    height={130}
                    className={styles.serviceImage}
                    style={{ objectFit: 'cover' }}
                  />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <ul
        className={classNames(styles.mobileNavOverlay, {
          [styles.mobileNavOverlayClose]: !mobileOpen,
        })}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.path} onClick={() => dispatch(closePanels())}>
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <button
            className={styles.serviceBtn}
            onClick={() => dispatch(toggleServices())}
          >
            서비스
          </button>
        </li>
      </ul>

      {servicesOpen && mobileOpen && (
        <div className={`${styles.servicesPanel} grid grid-cols-2`}>
          {serviceLinks.map((link, index) => (
            <div key={link.name} className={styles.column}>
              <div className={styles.textCenter}>
                <Link href={link.path} onClick={() => dispatch(closePanels())}>
                  <Image
                    src={`/images/services/${index + 1}.jpg`}
                    alt={link.name}
                    width={130}
                    height={130}
                  />
                  <div>{link.name}</div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
