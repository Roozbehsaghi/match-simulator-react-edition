import React from "react";
import styles from "./Menu.module.scss";
import { motion } from "framer-motion"; // Import motion from framer-motion library for animation

const localHost = "http://localhost:3000/";

const menuItems = [
  { text: "Groups", href: `${localHost}groups`, duration: 0.7 },
  { text: "Match Schedule", href: localHost, duration: 1 },
  { text: "Semi Final", href: `${localHost}table`, duration: 1.2 },
  { text: "Final", href: localHost, duration: 1.4 },
];

const Menu = () => {
  const motionProps = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <nav className={styles.menu}>
      <ul>
        <motion.ol
          {...motionProps.initial}
          {...{ ...motionProps.animate }}
          transition={{ duration: 0.7 }}
        >
          <a href={`${localHost}groups`}>Groups</a>
        </motion.ol>
        <motion.ol
          {...motionProps.initial}
          {...{ ...motionProps.animate }}
          transition={{ duration: 1 }}
        >
          <a href={localHost}>Match Schedule</a>
        </motion.ol>
        <motion.ol
          {...motionProps.initial}
          {...{ ...motionProps.animate }}
          transition={{ duration: 1.2 }}
        >
          <a href={`${localHost}table`}>Semi Final</a>
        </motion.ol>
        <motion.ol
          {...motionProps.initial}
          {...{ ...motionProps.animate }}
          transition={{ duration: 1.4 }}
        >
          <a href={`${localHost}`}>Final</a>
        </motion.ol>
      </ul>
    </nav>
  );
};

export default Menu;
