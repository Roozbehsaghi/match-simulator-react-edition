import { useState } from "react";
import styles from "./Button.module.scss";
import soccerBall from "../../assets/image/soccer-ball.png";
import { motion } from "framer-motion"; // Import motion from framer-motion library for animation

type Props = {
  onClick: () => void;
};

const Button = ({ onClick }: Props) => {
  // State to track whether the ball is kicked or not
  const [kick, setKick] = useState<boolean>(false);

  const handleButtonClick = () => {
    setKick(!kick);

    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.div
      // Initial styles when the component mounts
      initial={{ rotate: 0 }}
      // Animated styles when the component is visible
      animate={{ rotate: 1080 }}
      // Transition settings for a smooth animation
      transition={{ duration: 4 }}
    >
      <button className={styles["button"]} onClick={handleButtonClick}>
        <img
          src={soccerBall}
          alt="soccer ball"
          className={`${
            !kick
              ? styles["soccer-ball-turn-left"]
              : styles["soccer-ball-turn-right"]
          }`}
        />
      </button>
    </motion.div>
  );
};

export default Button;
