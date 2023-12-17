import { MatchRounds } from "../components";
import styles from "./RoundTable.module.scss";
import { motion } from "framer-motion";

type RoundTableProps = {
  matchRounds: MatchRounds;
  tableTitles: string[];
};

const RoundTable: React.FC<RoundTableProps> = ({
  matchRounds,
  tableTitles,
}) => {
  return (
    <div className={styles["container"]}>
      <motion.div className={styles["text-header"]}>
        {/* Display the title of the table */}
        <h2>{tableTitles[15]}</h2>
      </motion.div>
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
                      <h4 className={styles["teams-name"]}>{home.name}</h4>
                      <h4 className={styles["teams-result"]}>{result.home}</h4>
                      <h4 className={styles["teams-result-line"]}>-</h4>
                      <h4 className={styles["teams-result"]}>{result.away}</h4>
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

export default RoundTable;
