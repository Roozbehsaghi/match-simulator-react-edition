import React from "react";
import styles from "./CountryGroup.module.scss";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

type CountryGroupProps = {
  groupName: string;
  countryNames: string[];
  onClick: () => void;
};

const CountryGroup: React.FC<CountryGroupProps> = ({
  groupName: propGroupName,
  countryNames,
  onClick,
}) => {
  const { groupName } = useParams();
  // console.log("urlGroupName", urlGroupName);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4 }}
      className={styles.box}
    >
      <div className={styles["box-title"]}>{propGroupName}</div>
      <div className={styles["box-contents"]}>
        {countryNames.map((country, id) => (
          <div key={id} className={styles["country"]} onClick={onClick}>
            {country}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountryGroup;
