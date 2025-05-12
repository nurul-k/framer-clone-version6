"use client";

import styles from './ProductDropdown.module.css';
import Link from 'next/link';
import Image from 'next/image';

const ProductDropdown = () => {
  return (
    <div className={styles.dropdown}>
      <ul>
        <li>
        <Image width="18" height="18"  alt='Sales tax monitor' src='/images/desktop-solid.svg' />
          <Link href="/product" className={styles.link}>
            Sales Tax Compliance Platform
          </Link>
        </li>
        <li>
        <Image width="18" height="18" alt='calculator image'  src='/images/calculator-solid.svg' />
          <Link href="/product" className={styles.link}>
            Real Time Calculations
          </Link>
        </li>
        <li>
        <Image width="18" height="18" alt='Tax Report image'  src='/images/percent-solid.svg' />
          <Link href="/product" className={styles.link}>
            Sales Tax Reports
          </Link>
        </li>
        <li>
        <Image width="18" height="18" alt='globe image'  src='/images/globe-solid.svg' />
          <Link href="/product" className={styles.link}>
            Nexus Insights
          </Link>
        </li>
        <li>
        <Image width="18" height="18" alt='checked clipboard image'  src='/images/clipboard-check-solid.svg' />
          <Link href="/product" className={styles.link}>
            Filing and Remittance
          </Link>
        </li>
        <li>
        <Image width="18" height="18" alt='multidirectional arrow image'  src='/images/arrows-up-down-left-right-solid.svg' />
          <Link href="/product" className={styles.link}>
            Integrations
          </Link>
        </li>
        <li>
        <Image width="18" height="18" alt='clipboard image'  src='/images/clipboard-regular.svg' />
          <Link href="/product" className={styles.link}>
            State Sales Tax Registration
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductDropdown;










/* 'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './ProductDropdown.module.css';

const ProductDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setOpen(!open);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdownWrapper} ref={dropdownRef}>
      <button className={styles.menuButton} onClick={toggleDropdown}>
        Product <span className={styles.chevron}>⌄</span>
      </button>

      {open && (
        <div className={styles.dropdownMenu}>
          <DropdownItem label="Sales Tax Compliance Platform" />
          <DropdownItem label="Real Time Calculations" />
          <DropdownItem label="Sales Tax Reports" />
          <DropdownItem label="Nexus Insights" />
          <DropdownItem label="Filing and Remittance" />
          <DropdownItem label="Integrations" />
          <DropdownItem label="State Sales Tax Registration" />
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({ label }) => {
  return (
    <div className={styles.dropdownItem}>
      <span className={styles.icon}>📦</span> 
      <span>{label}</span>
    </div>
  );
};

export default ProductDropdown;
*/