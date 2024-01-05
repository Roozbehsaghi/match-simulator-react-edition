import React from "react";
import styles from "./CountryGroup.module.scss";
import { motion } from "framer-motion";

type CountryGroupProps = {
  groupName: string;
  countryNamesInArray: string[];
  onClick: () => void;
};

const CountryGroup: React.FC<CountryGroupProps> = ({
  groupName,
  countryNamesInArray,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4 }}
      className={styles.box}
    >
      <div className={styles["box-title"]}>{groupName}</div>
      <div className={styles["box-contents"]}>
        {countryNamesInArray.map((country, id) => (
          <div key={id} className={styles["country"]} onClick={onClick}>
            {country}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountryGroup;
