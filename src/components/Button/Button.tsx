// Import React's useState hook
import { useState } from "react";

// Import styles and images
import styles from "./Button.module.scss";
import soccerBall from "../../image/soccerBall.png";
import soccerBallAfterKick from "../../image/soccerBallAfterKick.png";

// Define the props for the Button component
type Props = {
  onClick: () => void; // Function to be executed on button click
};

// Button component
const Button = ({ onClick }: Props) => {
  // State to track whether the ball is kicked or not
  const [kick, setKick] = useState<boolean>(false);

  // Function to handle button click
  const handleButtonClick = () => {
    // Update the state to toggle the kick state
    setKick(!kick);

    // Call the provided onClick function if it exists
    if (onClick) {
      onClick();
    }
  };

  // Render the button with an image based on the kick state
  return (
    <button className={styles["button"]} onClick={handleButtonClick}>
      {!kick ? (
        <img
          src={soccerBall}
          alt="soccerBall"
          className={styles["soccer-ball"]}
        />
      ) : (
        <img
          src={soccerBallAfterKick}
          alt="soccerBallAfterKick"
          className={styles["soccer-ball-after-kick"]}
        />
      )}
    </button>
  );
};

// Export the Button component
export default Button;
