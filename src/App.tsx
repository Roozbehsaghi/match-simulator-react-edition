import { useState } from "react";
import styles from "./App.module.scss";
import "./components/StyleComponent/colors.module.scss";
import "./components/ToolkitComponent/breakpoints.module.scss";
import {
  Header,
  Button,
  LogoComponent,
  StandingTable,
  RoundTable,
  MatchRounds,
  matchProcces,
  tableTitles,
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
        {/* FIFA Logo component */}
        <LogoComponent />
        {/* Container for the button */}
        <div className={styles["ball-container"]}>
          {/* Button component for playing a full round */}
          <Button onClick={playFullRound} />
        </div>

        {/* Container for the table section */}
        <div className={styles["tables-container"]}>
          {/* Container for the list/table on the left */}
          <div className={styles["standing-table-container"]}>
            {/* StandingTable component */}
            <StandingTable
              tableTitles={tableTitles}
              allMatchRounds={allMatchRounds}
              sortedTeamsByPointsAndStrength={sortedTeamsByPointsAndStrength}
            />
          </div>

          {/* Container for the round/table on the right */}
          <div className={styles["round-table-container"]}>
            {/* RoundTable component */}
            <RoundTable
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
