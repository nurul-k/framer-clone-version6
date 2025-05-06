"use client";

import styles from './LogoText.module.css';  
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
        // transform is inline on the original — add if needed here:  
        // style={{ transform: 'scale(1)' }}  
      >  
        <p className={styles.text} xmlns="http://www.w3.org/1999/xhtml">  
          <a href="./" className={styles.link} aria-current="page">  
            KRYSTA  
          </a>  
        </p>  
      </foreignObject>  
    </svg> 

      
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
          <Link href="/product" className="nav-link2">
            Product
          </Link>
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

      {/* Mobile Menu (sidebar) */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link href="/product" className="nav-link2" onClick={toggleMenu}>
              Product
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/Solutoions" className="nav-link2" onClick={toggleMenu}>
              Solutions
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link3" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;  

