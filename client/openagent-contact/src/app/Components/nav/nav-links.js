"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import styles from "./nav-links.module.scss";
import logo from "../../img/openagent-logo.jpg";

export function NavLinks() {
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "600px" });
  // planned to implement a mobile responsive navbar
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 600) {
      setShowMenu(false);
    }
  };

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    return (
      <ul className={listClassName}>
        <li className={styles.nav__item}>
          <Link
            className={styles.nav__link}
            href="/"
            onClick={closeMenuOnMobile}
          >
            Home
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link
            className={styles.nav__link}
            href="/contacts-list"
            onClick={closeMenuOnMobile}
          >
            Contacts List
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${styles.container}`}>
        <Link href="/">
          <Image src={logo} width={150} height={100} alt="Open Agent Logo" />
        </Link>
        {renderNavLinks()}
      </nav>
    </header>
  );
}

export default NavLinks;
