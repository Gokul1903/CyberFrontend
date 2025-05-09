// Navbar.tsx
"use client";

import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

interface NavbarProps {
  onCreateJobClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCreateJobClick }) => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image src="/logo.svg" alt="Logo" width={44} height={44.68} />
        </div>

        {/* Nav Items */}
        <div className={styles.navItems}>
          {["Home", "Find Jobs", "Find Talents", "About us", "Testimonials"].map((item, index) => (
            <div key={index} className={styles.popup}>
              <div className={styles.innerpopup}>
                <span className={styles.navItem}>{item}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Create Job Button */}
        <div className={styles.createJobWrapper}>
          <button className={styles.createJobBtn} onClick={onCreateJobClick}>
            Create Jobs
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
