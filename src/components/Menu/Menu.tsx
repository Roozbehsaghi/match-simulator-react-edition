import React from "react";
import styles from "./Menu.module.scss";
import { motion } from "framer-motion"; // Import motion from framer-motion library for animation

const localHost = "http://localhost:3000/";

const menuItems = [
  {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.7 },
    text: "Groups",
    href: `${localHost}groups`,
  },
  {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.7 },
    text: "Match Schedule",
    href: localHost,
  },
  {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1.2 },
    text: "Semi Final",
    href: `${localHost}table`,
  },
  {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1.4 },
    text: "Final",
    href: localHost,
  },
];

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        {menuItems.map((menuItem, index) => {
          return (
            <motion.ol
              key={index}
              initial={menuItem.initial}
              animate={menuItem.animate}
              transition={menuItem.transition}
            >
              <a href={menuItem.href}>{menuItem.text}</a>
            </motion.ol>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
