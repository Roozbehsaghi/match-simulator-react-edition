import React from "react";
import styles from "./Menu.module.scss";
import { motion } from "framer-motion";
import { tableTitles, defaultRoutes, localHost } from "../components";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuItems = [
    {
      duration: 0.9,
      text: tableTitles[32],
      href: `${localHost}${defaultRoutes.countriesGroup}`, // "Countries Group"
    },
    { duration: 1, text: tableTitles[33], href: `${localHost}` }, // "Match Schedule",
    {
      duration: 1.1,
      text: tableTitles[31],
      href: `${localHost}${defaultRoutes.standingTableGroups}`, // "Standing Table Groups"
    },
    { duration: 1.2, text: tableTitles[34], href: `${localHost}` }, // "Round of 16"
    { duration: 1.3, text: tableTitles[35], href: `${localHost}` }, // "Quarter-finals"
    {
      duration: 1.4,
      text: tableTitles[19],
      href: `${localHost}${defaultRoutes.semiFinal}`, // "Semi-Final"
    },
    { duration: 1.5, text: tableTitles[36], href: `${localHost}` }, // "Final"
  ].map(({ duration, text, href }, index) => ({
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration },
    text,
    href,
    key: index,
  }));

  return (
    <nav className={styles.menu}>
      <ul>
        {menuItems.map((menuItem) => (
          <motion.ol
            key={menuItem.key}
            initial={menuItem.initial}
            animate={menuItem.animate}
            transition={menuItem.transition}
          >
            <Link to={menuItem.href}>{menuItem.text}</Link>
          </motion.ol>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
