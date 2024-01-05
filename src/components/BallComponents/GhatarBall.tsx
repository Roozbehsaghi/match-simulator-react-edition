import React from "react";
import ghatarBall from "../../assets/logo/Subject.png";
import styles from "./GhatarBall.module.scss";
import { motion } from "framer-motion";

const GhatarBall = () => {
  return (
    <div className={styles["qatar-ball-container"]}>
      <motion.img
        className={styles["qatar-ball"]}
        src={ghatarBall}
        alt="qatar-ball"
        initial={{ rotate: 0 }}
        // Animated styles when the component is visible
        animate={{ rotate: 1080 }}
        // Transition settings for a smooth animation
        transition={{ duration: 4 }}
      />
    </div>
  );
};

export default GhatarBall;
