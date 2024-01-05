import { useState } from "react";
import styles from "./StandingTableGroups.module.scss";
import {
  Header,
  LogoComponent,
  MatchRounds,
  matchProcces,
  tableTitles,
  getAllTeams,
  sortByPointsAndStrengthDescending,
  Footer,
  StandingTableSingle,
  BallComponent,
} from "../components";

type StandingTableGroupsProps = {};

const StandingTableGroups: React.FC<StandingTableGroupsProps> = () => {
  // State to manage all match rounds
  const [allMatchRounds, setAllMatchRounds] = useState<MatchRounds[]>([]);

  // Function to play a full round and update state
  const playFullRound = () => {
    const newMatch = matchProcces();
    setAllMatchRounds((prevRounds) => [...prevRounds, newMatch]);
  };

  // Flatten the array of arrays to a single array
  const allMatchRound = allMatchRounds.map((arrayOfArrays) =>
    arrayOfArrays.flatMap((array) => array)
  );

  // Get all teams and sort them by points and strength
  const allTeams = getAllTeams(allMatchRound.flat());
  const sortedTeamsByPointsAndStrength =
    sortByPointsAndStrengthDescending(allTeams);

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
        {allMatchRounds.map((rounds, id) => {
          return rounds.map((round, id) => (
            <div key={id} className={styles["group-standing-container"]}>
              <h3 className={styles["group-header"]}>Group A</h3>
              <div className={styles["individual-table"]}>
                {/* <StandingTableSingle
                  tableTitles={tableTitles}
                  allMatchRounds={allMatchRounds}
                  sortedTeamsByPointsAndStrength={
                    sortedTeamsByPointsAndStrength
                  }
                /> */}
              </div>
            </div>
          ));
        })}
      </div>

      <Footer />
    </div>
  );
};

export default StandingTableGroups;
