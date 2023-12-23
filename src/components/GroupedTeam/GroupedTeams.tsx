import React from "react";
import GroupedTeam from "./GroupedTeam";
import styles from "./GroupedTeams.module.scss";
import { tableTitles, Header, LogoComponent, Footer } from "../components";
import { motion } from "framer-motion";

const GroupedTeams = () => {
  const route: string = "/table";

  // Slicing titles for the first and second rows
  const firstRowTitles: string[] = tableTitles.slice(21, 25);
  const secondRowTitles: string[] = tableTitles.slice(25, 29);

  return (
    <div className={styles["container"]}>
      <Header
        tableTitleTop={tableTitles[18]}
        tableTitleBottom={tableTitles[20]}
      />
      <LogoComponent />
      <motion.div
        className={styles["first-row"]} // Initial styles when the component mounts
        initial={{ opacity: 0, scale: 0.8 }}
        // Animated styles when the component is visible
        animate={{ opacity: 1, scale: 1 }}
        // Transition settings for a smooth animation
        transition={{ duration: 1 }}
      >
        {firstRowTitles.map((title, index) => (
          <GroupedTeam key={index} navigateLink={route} title={title} />
        ))}
      </motion.div>

      <motion.div
        className={styles["second-row"]}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
      >
        {secondRowTitles.map((title, index) => (
          <GroupedTeam key={index} navigateLink={route} title={title} />
        ))}
      </motion.div>
      <Footer />
    </div>
  );
};

export default GroupedTeams;
