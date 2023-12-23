import React, { useEffect } from "react";
import styles from "./HomePage.module.scss";
import {
  Header,
  tableTitles,
  Footer,
  Menu,
  LogoComponent,
  FixtureData,
} from "../components";
import { fetchEuropeanCountryNames } from "./countrieNames";
import { motion } from "framer-motion";

const HomePage = () => {
  useEffect(() => {
    fetchEuropeanCountryNames();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles["header-container"]}>
        {/* Header component with table titles */}
        <Header
          tableTitleTop={tableTitles[18]}
          tableTitleBottom={tableTitles[20]}
        />
        <LogoComponent />
      </div>
      <motion.div className={styles["background-image"]}>
        <div className={styles.menu}>
          <Menu />
        </div>
      </motion.div>
      <FixtureData />
      <Footer />
    </div>
  );
};

export default HomePage;
