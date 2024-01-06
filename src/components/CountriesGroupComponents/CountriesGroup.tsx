import React from "react";
import styles from "./CountriesGroup.module.scss";
import {
  tableTitles,
  Header,
  LogoComponent,
  Footer,
  CountryGroup,
  defaultRoutes,
  baseMatchRoundsWithGroups,
} from "../components";
import { useNavigate } from "react-router-dom";

const CountriesGroup = () => {
  // Route for navigation
  const route: string = `${defaultRoutes.countryGroup}`;

  const navigate = useNavigate();
  const handleNavigate = () => {
    // navigate(route);
  };

  return (
    <div>
      <Header
        tableTitleTop={tableTitles[18]}
        tableTitleBottom={tableTitles[20]}
      />
      <LogoComponent />

      <div className={styles["outer-container"]}>
        <div className={styles["inner-container"]}>
          {baseMatchRoundsWithGroups.map((group, index) => (
            <CountryGroup
              key={index}
              groupName={group.groupName}
              countryNames={group.teams.map((team) => team.name)}
              onClick={handleNavigate}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CountriesGroup;
