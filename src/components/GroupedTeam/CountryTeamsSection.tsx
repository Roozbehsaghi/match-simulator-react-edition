import React from "react";
import styles from "./CountryTeamsSection.module.scss";
import {
  tableTitles,
  Header,
  LogoComponent,
  Footer,
  listOfCountryNames,
  CountrySection,
} from "../components";
import { useNavigate } from "react-router-dom";

const CountryTeamsSection = () => {
  // Route for navigation
  const route: string = "/table";

  const navigate = useNavigate();
  const backToHomePage = () => {
    navigate(route);
  };

  // Extract titles for each country section from tableTitles array
  const sectionTitles: string[] = tableTitles.slice(21, 29);

  return (
    <div>
      {/* Header component with table titles */}
      <Header
        tableTitleTop={tableTitles[18]}
        tableTitleBottom={tableTitles[20]}
      />
      <LogoComponent />

      <div className={styles["outer-container"]}>
        <div className={styles["inner-container"]}>
          {/* Iterate through each country's list and render a CountrySection for each */}
          {listOfCountryNames.map((countriesList: string[], index) => (
            <CountrySection
              key={index}
              title={sectionTitles[index]}
              countries={countriesList}
              onClick={backToHomePage}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CountryTeamsSection;
