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
  const navigate = useNavigate();
  // Updated to take a parameter for group name
  const handleNavigate = (groupName: string) => {
    // Use groupName to dynamically set the navigation path
    navigate(`${defaultRoutes.countryGroup}/${groupName}`);
    console.log("groupName", groupName);
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
              onClick={() => handleNavigate(group.groupName)}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CountriesGroup;
