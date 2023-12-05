import styles from "./Header.module.scss";
import { TableTitles } from "../components";

// Props for the Header component
type Props = {
  tableTitles: TableTitles;
};

// Header component displaying titles
const Header = ({ tableTitles }: Props) => {
  return (
    // Header container with styles applied
    <header className={styles["container"]}>
      {/* First title */}
      <h1>{tableTitles[18]}</h1>
      {/* Second title */}
      <h1>{tableTitles[19]}</h1>
    </header>
  );
};

export default Header;
