import React from "react";
import styles from "./HomePage.module.scss";
import {
  Header,
  tableTitles,
  Footer,
  Menu,
  LogoComponent,
} from "../components";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles["header-container"]}>
        {/* Header component with table titles */}
        <Header
          tableTitleTop={tableTitles[18]}
          tableTitleBottom={tableTitles[37]}
        />
        <LogoComponent />
      </div>
      <motion.div className={styles["background-image"]}>
        <div className={styles.menu}>
          <Menu />
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default HomePage;
