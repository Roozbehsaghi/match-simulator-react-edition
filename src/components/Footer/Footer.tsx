import React from "react";
// Importing styles specific to the Footer component
import styles from "./Footer.module.scss";

// Importing tableTitles and destructuring the needed values from "../components"
import { tableTitles } from "../components";

const Footer = () => {
  return (
    // Footer container with styles from Footer.module.scss
    <footer className={styles.container}>
      <article>
        {/* Footer text section */}
        <div className={styles["footer-text"]}>
          {/* First paragraph with a link */}
          <p>
            <a href="/">{tableTitles[29]}</a>
          </p>
          {/* Second paragraph with copyright information */}
          {/* <p> &copy; {tableTitles[30]} </p> */}
          <p>"Pages are in developing, except for the Semi-Final page."</p>
        </div>
      </article>
    </footer>
  );
};

export default Footer;
