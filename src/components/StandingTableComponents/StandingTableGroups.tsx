import { useState } from "react";
import styles from "./StandingTableGroups.module.scss";
import {
  Header,
  LogoComponent,
  tableTitles,
  Footer,
  StandingTableSingle,
  BallComponent,
  baseMatchRoundsWithGroups,
} from "../components";
import { motion } from "framer-motion";

type StandingTableGroupsProps = {};

const StandingTableGroups: React.FC<StandingTableGroupsProps> = () => {
  function playFullRound(): void {
    console.log("Function not implemented.");
  }

  const animation = [
    { duration: 1 },
    { duration: 1.3 },
    { duration: 1.6 },
    { duration: 1.9 },
    { duration: 2.1 },
    { duration: 2.4 },
    { duration: 2.7 },
    { duration: 3 },
  ].map(({ duration }) => ({
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration },
  }));

  return (
    <div>
      <Header
        tableTitleTop={tableTitles[18]}
        tableTitleBottom={tableTitles[31]}
      />
      {/* FIFA Logo component */}
      <LogoComponent />
      {/* Container for the button */}
      <div className={styles["ball-container"]}>
        {/* BallComponent component for playing a full round */}
        <BallComponent onClick={playFullRound} />
      </div>
      {/* Main container for the entire application */}
      <div className={styles["tables-container"]}>
        {baseMatchRoundsWithGroups.map((group, index) => {
          const countryNames = group.teams.map((team) => team);
          // Retrieve the animation properties for the current index
          const animProps = animation[index % animation.length];
          return (
            <motion.div key={index} {...animProps}>
              <div className={styles["group-standing-container"]}>
                <h3 className={styles["group-header"]}>{group.groupName}</h3>
                <div className={styles["individual-table"]}>
                  <StandingTableSingle
                    tableTitles={tableTitles}
                    countryNames={countryNames}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default StandingTableGroups;
