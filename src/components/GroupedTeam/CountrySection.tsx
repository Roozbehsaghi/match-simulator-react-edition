import React from "react";
import styles from "./CountrySection.module.scss";
import { motion } from "framer-motion";

type CountrySectionProps = {
  title: string;
  countries: string[];
  onClick: () => void;
};

const CountrySection: React.FC<CountrySectionProps> = ({
  title,
  countries,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4 }}
      className={styles.box}
      onClick={onClick}
    >
      <div className={styles["box-title"]}>{title}</div>
      <div className={styles["box-contents"]}>
        {countries.map((country, innerIndex) => (
          <div className={styles["country"]} key={innerIndex}>
            {country}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountrySection;
