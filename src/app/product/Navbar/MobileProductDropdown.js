// components/MobileProductDropdown.js
"use client";

import styles from "./MobileProductDropdown.module.css";
import Link from "next/link";
import Image from "next/image";

const MobileProductDropdown = ({ onLinkClick }) => {
  return (
    <ul className={styles.dropdown}>
      <li>
        <Link href="/product" onClick={onLinkClick} className={styles.link}>
          <Image
            src="/images/desktop-solid.svg"
            alt="Sales Tax Icon"
            width={18}
            height={18}
          />
          Sales Tax Compliance
        </Link>
      </li>
      <li>
        <Link href="/product" onClick={onLinkClick} className={styles.link}>
          <Image
            src="/images/calculator-solid.svg"
            alt="Calc Icon"
            width={18}
            height={18}
          />
          Real Time Calculations
        </Link>
      </li>
      <li>
        <Link href="/product" onClick={onLinkClick} className={styles.link}>
          <Image
            src="/images/percent-solid.svg"
            alt="Tax Report Icon"
            width={18}
            height={18}
          />
          Sales Tax Reports
        </Link>
      </li>
      <li>
        <Link href="/product" onClick={onLinkClick} className={styles.link}>
          <Image
            src="/images/globe-solid.svg"
            alt="globe Icon"
            width={18}
            height={18}
          />
           Nexus Insights
        </Link>
      </li>
      <li>
        <Link href="/product" onClick={onLinkClick} className={styles.link}>
          <Image
            src="/images/clipboard-check-solid.svg"
            alt="checked clipboard Icon"
            width={18}
            height={18}
          />
           Filing and Remittance
        </Link>
      </li>
      <li>
        <Link href="/product" onClick={onLinkClick} className={styles.link}>
          <Image
            src="/images/arrows-up-down-left-right-solid.svg"
            alt="multidirectional arrow Icon"
            width={18}
            height={18}
          />
           Integrations
        </Link>
      </li>
      <li>
        <Link href="/product" onClick={onLinkClick} className={styles.link}>
          <Image
            src="/images/clipboard-regular.svg"
            alt="clipboard Icon"
            width={18}
            height={18}
          />
          State Sales Tax Registration
        </Link>
      </li>
    </ul>
  );
};

export default MobileProductDropdown;
