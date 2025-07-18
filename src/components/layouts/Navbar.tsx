'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { navLinks, serviceLinks } from '../../constants/pageUrls';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import styles from './style.module.css';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const mobileRef = useRef<HTMLUListElement | null>(null);

  const toggleMobile = () => {
    setMobileOpen((prev) => !prev);
    setServicesOpen(false);
  };

  const openServices = () => {
    setServicesOpen(true);
  };

  const closePanels = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      mobileRef.current &&
      !mobileRef.current.contains(e.target as Node) &&
      (e.target as HTMLElement).closest(`.${styles.hamburger}`) === null
    ) {
      closePanels();
    }
  };

  useEffect(() => {
    if (mobileOpen || servicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileOpen, servicesOpen]);

  return (
    <nav className={styles.nav}>
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
            {mobileOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </button>

          <ul className={styles.menu}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}

            <li className={styles.dropdown}>
              <span className={styles.dropdownToggle}>서비스</span>
              <ul className={styles.dropdownMenu}>
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {mobileOpen && (
        <ul className={styles.mobileNavOverlay} ref={mobileRef}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.path} onClick={closePanels}>
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <button className={styles.serviceBtn} onClick={openServices}>
              서비스
            </button>
          </li>
        </ul>
      )}

      {servicesOpen && (
        <div className={styles.servicesPanel}>
          <div className={styles.column}>
            {serviceLinks
              .slice(0, Math.ceil(serviceLinks.length / 2))
              .map((link) => (
                <Link key={link.name} href={link.path} onClick={closePanels}>
                  {link.name}
                </Link>
              ))}
          </div>
          <div className={styles.column}>
            {serviceLinks
              .slice(Math.ceil(serviceLinks.length / 2))
              .map((link) => (
                <Link key={link.name} href={link.path} onClick={closePanels}>
                  {link.name}
                </Link>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
