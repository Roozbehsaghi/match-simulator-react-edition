import { useState } from "react";
import styles from "./App.module.scss";
import {
  Header,
  Button,
  matchProcces,
  tableTitles,
  MatchListTable,
  MatchRoundTable,
  MatchRounds,
  getAllTeams,
  sortByPointsAndStrengthDescending,
} from "./components/components";

function App() {
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
      {/* Header component with table titles */}
      <Header tableTitles={tableTitles} />

      {/* Main container for the entire application */}
      <div className={styles["main-container"]}>
        {/* Container for the button */}
        <div className={styles["ball-container"]}>
          {/* Button component for playing a full round */}
          <Button onClick={playFullRound} />
        </div>

        {/* Container for the table section */}
        <div className={styles["table-container"]}>
          {/* Container for the list/table on the left */}
          <div className={styles["list-container"]}>
            {/* MatchListTable component */}
            <MatchListTable
              tableTitles={tableTitles}
              allMatchRounds={allMatchRounds}
              sortedTeamsByPointsAndStrength={sortedTeamsByPointsAndStrength}
            />
          </div>

          {/* Container for the round/table on the right */}
          <div className={styles["round-container"]}>
            {/* MatchRoundTable component */}
            <MatchRoundTable
              matchRounds={allMatchRounds[allMatchRounds.length - 1]}
              tableTitles={tableTitles}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
