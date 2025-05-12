"use client";

import { useState, useEffect } from "react";
import ProductDropdown from './ProductDropdown';
import styles from "./LogoText.module.css";
import MobileProductDropdown from "./MobileProductDropdown";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true); // assume desktop by default
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  let hoverTimeout;

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize(); // initial run
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar-container sticky-header">
      <svg
        className={styles.container}
        viewBox="0 0 235.07 72"
        role="img"
        aria-label="KRYSTA"
        xmlns="http://www.w3.org/2000/svg"
      >
        <foreignObject
          className={styles.foreignObject}
          width="100%"
          height="100%"
        >
          <p className={styles.text} xmlns="http://www.w3.org/1999/xhtml">
            <a href="./" className={styles.link} aria-current="page">
              KRYSTA
            </a>
          </p>
        </foreignObject>
      </svg>

      <div className="menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <span className="close-icon">&#x2715;</span>
        ) : (
          <span className="hamburger-icon">&#9776;</span>
        )}
      </div>

      {/* Desktop Menu */}
      <ul className="nav nav-pills desktop-menu">
        <li className="nav-item" style={{ position: "relative" }}>
          <div
            onMouseEnter={() => {
              if (isDesktop) {
                clearTimeout(hoverTimeout);
                setIsDropdownOpen(true);
              }
            }}
            onMouseLeave={() => {
              if (isDesktop) {
                hoverTimeout = setTimeout(() => setIsDropdownOpen(false), 150);
              }
            }}
            style={{ display: "inline-block" }}
          >
            <span className="nav-link2">Product</span>
            {isDropdownOpen && isDesktop && <ProductDropdown />}
          </div>
        </li>
        <li className="nav-item">
          <Link href="/Solutoions" className="nav-link2">
            Solutions
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact" className="nav-link3">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu (Sidebar) */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
  <ul className="nav nav-pills">
    <li className="nav-item">
      <button
        className="nav-link2"
        onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
        style={{ background: "none", border: "none", padding: 0 }}
      >
        Product ⌄
      </button>
      {isMobileDropdownOpen && (
        <MobileProductDropdown onLinkClick={() => {
          setIsMobileMenuOpen(false);
          setIsMobileDropdownOpen(false);
        }} />
      )}
    </li>
    <li className="nav-item">
      <Link href="/Solutoions" className="nav-link2" onClick={() => setIsMobileMenuOpen(false)}>
        Solutions⌄
      </Link>
    </li>
    <li className="nav-item">
      <Link href="/contact" className="nav-link3" onClick={() => setIsMobileMenuOpen(false)}>
        Contact
      </Link>
    </li>
  </ul>
</div>
    </nav>
  );
};

export default Navbar;
