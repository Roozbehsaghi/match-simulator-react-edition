import styles from "./Header.module.scss";
import { motion } from "framer-motion"; // Import motion from framer-motion library for animation

// Props for the Header component
type HeaderProps = {
  tableTitleTop: string;
  tableTitleBottom: string;
};

// Header component displaying titles
const Header: React.FC<HeaderProps> = ({ tableTitleTop, tableTitleBottom }) => {
  return (
    // Header container with styles applied
    <header className={styles["container"]}>
      <motion.h1
        // Initial styles when the component mounts
        initial={{ opacity: 0, scale: 0 }}
        // Animated styles when the component is visible
        animate={{ opacity: 1, scale: 1 }}
        // Transition settings for a smooth animation
        transition={{ duration: 2 }}
      >
        {/* First title */}
        {tableTitleTop}
      </motion.h1>

      {/* Second title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4 }}
      >
        {tableTitleBottom}
      </motion.h1>
    </header>
  );
};

export default Header;
