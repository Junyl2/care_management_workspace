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
  openServices,
  closeServices,
  closePanels,
} from '@/store/features/uiSlice';

const Navbar = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const navRef = useRef<HTMLDivElement>(null);

  const mobileOpen = useAppSelector((state) => state.ui.mobileOpen);
  const servicesOpen = useAppSelector((state) => state.ui.servicesOpen);

  // Handle outside clicks
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        dispatch(closePanels());
      }
    };

    if (mobileOpen || servicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    if (servicesOpen && window.innerWidth <= 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [mobileOpen, servicesOpen, dispatch]);

  // Automatically open or close the services dropdown based on the pathname
  useEffect(() => {
    if (pathname.startsWith('/services')) {
      dispatch(openServices());
    } else {
      dispatch(closeServices());
    }
  }, [pathname, dispatch]);

  return (
    <nav className={styles.nav} ref={navRef}>
      <div className="container">
        <div className={styles.navContainer}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/" onClick={() => dispatch(closePanels())}>
              <Image
                src="/assets/images/logo.png"
                alt="Care Management"
                height={37}
                width={149}
                className={styles.Logo}
              />
            </Link>
          </div>

          {/* Hamburger for mobile */}
          <button
            className={styles.hamburger}
            onClick={() => dispatch(toggleMobile())}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>

          {/* Desktop Navigation */}
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

            {/* Services Link */}
            <li>
              <Link
                href="/services"
                className={classNames(styles.dropdown, styles.navLink, {
                  [styles.active]: pathname.startsWith('/services'),
                })}
                onClick={(e) => {
                  if (pathname.startsWith('/services')) {
                    e.preventDefault();
                    dispatch(toggleServices());
                  } else {
                    dispatch(closePanels());
                  }
                }}
              >
                {service.name}
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Services Dropdown */}
        <div
          className={classNames(styles.dropdownWrapper, {
            [styles.dropdownOpen]: servicesOpen,
          })}
        >
          <ul className={styles.dropdownMenu}>
            {serviceLinks.map((link, index) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={() => dispatch(closePanels())}
                  className={styles.subMenu}
                >
                  <Image
                    src={`/assets/images/services/${index + 1}.jpg`}
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
        </div>
      </div>
      {/* Mobile Navigation Overlay */}
      <ul
        className={classNames(styles.mobileNavOverlay, {
          [styles.mobileNavOverlayClose]: !mobileOpen,
        })}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className={classNames({
                [styles.active]: pathname === link.path,
              })}
              onClick={() => dispatch(closePanels())}
            >
              {link.name}
            </Link>
          </li>
        ))}

        <li>
          <button
            className={classNames(styles.serviceBtn, {
              [styles.active]: servicesOpen,
            })}
            onClick={() => dispatch(toggleServices())}
          >
            서비스
          </button>
        </li>
      </ul>

      {/* Mobile Services Panel */}
      {servicesOpen && mobileOpen && (
        <div className={`${styles.servicesPanel} grid grid-cols-2`}>
          {serviceLinks.map((link, index) => (
            <div key={link.name} className={styles.column}>
              <div className={styles.textCenter}>
                <Link href={link.path} onClick={() => dispatch(closePanels())}>
                  <Image
                    src={`/assets/images/services/${index + 1}.jpg`}
                    alt={link.name}
                    width={170}
                    height={170}
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
