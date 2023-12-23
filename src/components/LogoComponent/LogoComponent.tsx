import React from "react";
import FIFAWorldCup from "../../assets/logo/FIFAWorldCup.png";
import styles from "./LogoComponent.module.scss";
import { useNavigate } from "react-router-dom";

const LogoComponent = () => {
  const navigate = useNavigate();
  const backToHomePage = () => {
    navigate("/");
  };

  return (
    <div className={styles["svg-container"]}>
      <img
        className={styles["logo"]}
        src={FIFAWorldCup}
        alt="FIFA World Cup Logo"
        onClick={backToHomePage}
      ></img>
    </div>
  );
};

export default LogoComponent;
