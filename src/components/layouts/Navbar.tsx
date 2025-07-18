'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import styles from './style.module.css';
import { navLinks, serviceLinks } from '../../constants/pageUrls';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

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
            <Link href="/">Logo</Link>
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
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li className={styles.dropdown}>
              <span
                className={`${styles.dropdownToggle} ${servicesOpen ? styles.active : ''}`}
                onClick={toggleServices}
              >
                서비스
              </span>
            </li>
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
          <div className={styles.servicesPanel}>
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
