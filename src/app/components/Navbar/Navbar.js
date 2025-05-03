"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar-container sticky-header">
      <h1 className="webName">KRYSTA</h1>

      {/* Hamburger / Close Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? (
          <span className="close-icon">&#x2715;</span> // ✖
        ) : (
          <span className="hamburger-icon">&#9776;</span> // ☰
        )}
      </div>

      {/* Desktop Menu */}
      <ul className="nav nav-pills desktop-menu">
        <li className="nav-item">
          <Link href="/product" className="nav-link">
            Product
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/Solutoions" className="nav-link">
            Solutions
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu (sidebar) */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link href="/product" className="nav-link" onClick={toggleMenu}>
              Product
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/Solutoions" className="nav-link" onClick={toggleMenu}>
              Solutions
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

