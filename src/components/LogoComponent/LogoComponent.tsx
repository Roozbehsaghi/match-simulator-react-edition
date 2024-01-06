import React, { useRef } from "react";
import FIFAWorldCup from "../../assets/logo/FIFAWorldCup.png";
import styles from "./LogoComponent.module.scss";
import { useNavigate } from "react-router-dom";
import { useAnimationFrame } from "framer-motion";

const LogoComponent = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useAnimationFrame((t) => {
    // const rotate = Math.sin(t / 10000) * 200;
    // if (ref.current) {
    //   ref.current.style.transform = `rotateX(0deg) rotateY(${rotate}deg)`;
    // }
  });

  const navigate = useNavigate();
  const backToHomePage = () => {
    navigate("/");
  };

  return (
    <div ref={ref} className={styles["svg-container"]}>
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
