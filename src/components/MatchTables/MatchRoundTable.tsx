import { MatchRounds } from "../components";
import styles from "./MatchRoundTable.module.scss";

type Props = {
  matchRounds: MatchRounds;
  tableTitles: string[];
};

const MatchRoundTable = ({ matchRounds, tableTitles }: Props) => {
  return (
    <div className={styles.container}>
      {/* Display the title of the table */}
      <h2 className={styles["text-header"]}>{tableTitles[15]}</h2>
      {matchRounds ? (
        <div>
          {/* Map through each round in matchRounds */}
          {matchRounds?.map((deepCopyMatchRound, outerIndex: number) => (
            <div className={styles.round} key={outerIndex}>
              {/* Map through each match in a round */}
              {deepCopyMatchRound?.map(
                ({ home, away, result }, innerIndex: number) => (
                  <div key={innerIndex}>
                    <div className={styles.dataRound}>
                      {/* Display home team name */}
                      <h4 className={styles["teams-name"]}>{home.name}</h4>
                      {/* Display home team result */}
                      <h4 className={styles["teams-result"]}>{result.home}</h4>
                      {/* Display result separator */}
                      <h4 className={styles["teams-result-line"]}>-</h4>
                      {/* Display away team result */}
                      <h4 className={styles["teams-result"]}>{result.away}</h4>
                      {/* Display away team name */}
                      <h4 className={styles["teams-name"]}> {away.name}</h4>
                    </div>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      ) : (
        // Display an empty round if matchRounds is not available
        <div className={styles["empty-round"]}></div>
      )}
    </div>
  );
};

export default MatchRoundTable;
