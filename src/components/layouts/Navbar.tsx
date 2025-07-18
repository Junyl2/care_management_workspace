'use client';

import Link from 'next/link';
import styles from './style.module.css';
import { useState } from 'react';
import { navLinks, serviceLinks } from '../../constants/pageUrls';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <Link href="/">Logo</Link>
          </div>

          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <ul className={`${styles.menu} ${mobileOpen ? styles.open : ''}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.path} onClick={() => setMobileOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}

            <li
              className={styles.dropdown}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <span className={styles.dropdownToggle}>서비스</span>
              {(servicesOpen || mobileOpen) && (
                <ul className={styles.dropdownMenu}>
                  {serviceLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.path}
                        onClick={() => {
                          setMobileOpen(false);
                          setServicesOpen(false);
                        }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
