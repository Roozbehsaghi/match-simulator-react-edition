import React from "react";
import FIFAWorldCup from "../../assets/logo/FIFAWorldCup.png";
import styles from "./LogoComponent.module.scss";

const LogoComponent = () => {
  return (
    <div className={styles["svg-container"]}>
      <img
        className={styles["logo"]}
        src={FIFAWorldCup}
        alt="FIFA World Cup Logo"
      ></img>
    </div>
  );
};

export default LogoComponent;
