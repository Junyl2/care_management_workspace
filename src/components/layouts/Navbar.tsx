'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import styles from './Navbar.module.css';
import { navLinks, serviceLinks, service } from '@/lib/constants';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleMobile = () => {
    setMobileOpen((prev) => !prev);
    setServicesOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen((prev) => !prev);
  };

  const closePanels = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    if (pathname === '/services') {
      setServicesOpen(true);
    }
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closePanels();
      }
    };

    if (mobileOpen || servicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileOpen, servicesOpen]);

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
            onClick={toggleMobile}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>

          <ul className={styles.menu}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={
                    pathname === link.path
                      ? `${styles.navLink} ${styles.active}`
                      : styles.navLink
                  }
                  onClick={() => setServicesOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}

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
                onClick={pathname === service.path ? toggleServices : undefined}
              >
                {service.name}
              </span>
            </Link>
          </ul>
        </div>

        {servicesOpen && (
          <ul className={styles.dropdownMenu}>
            {serviceLinks.map((link, index) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={closePanels}
                  className={styles.subMenu}
                >
                  <Image
                    src={`/images/services/${index + 1}.jpg`}
                    alt={link.name}
                    width={130}
                    height={130}
                    style={{ objectFit: 'cover' }}
                    className={styles.serviceImage}
                  />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Mobile Navigation Overlay */}

      <ul
        className={`${styles.mobileNavOverlay} ${mobileOpen ? styles.mobileNavOverlay : styles.mobileNavOverlayClose}`}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.path} onClick={closePanels}>
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <button className={styles.serviceBtn} onClick={toggleServices}>
            서비스
          </button>
        </li>
      </ul>

      {/* Services Panel for Mobile */}
      {servicesOpen && mobileOpen && (
        <>
          {/* <div className={styles.closeButtonParent}>
            <button
              onClick={() => setServicesOpen(false)}
              aria-label="Close services panel"
              className={styles.closeButton}
            >
              <IoMdClose />
            </button>
          </div> */}
          <div className={`${styles.servicesPanel} grid grid-cols-2`}>
            {serviceLinks.map((link, index) => (
              <div key={link.name} className={styles.column}>
                <div className={styles.textCenter}>
                  <Link href={link.path} onClick={closePanels}>
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
        </>
      )}
    </nav>
  );
};

export default Navbar;
