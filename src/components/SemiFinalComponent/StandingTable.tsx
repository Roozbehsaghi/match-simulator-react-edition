import { MatchRounds, Team } from "../components";
import styles from "./StandingTable.module.scss";
import { motion } from "framer-motion";

// Define the props for the StandingTable component
type StandingTableProps = {
  tableTitles: string[];
  allMatchRounds: MatchRounds[];
  sortedTeamsByPointsAndStrength: Team[];
};

// StandingTable component
const StandingTable: React.FC<StandingTableProps> = ({
  tableTitles,
  allMatchRounds,
  sortedTeamsByPointsAndStrength,
}) => {
  // console.log("allMatchRounds", allMatchRounds);
  // console.log("sortedTeamsByPointsAndStrength", sortedTeamsByPointsAndStrength);

  return (
    <div>
      <motion.div className={styles["text-header"]}>
        {/* Table header displaying the title */}
        <h2>{tableTitles[17]}</h2>
      </motion.div>
      {/* Table displaying team statistics */}
      <table className={styles.table}>
        <thead>
          {/* Table header with relevant column names */}
          <tr>
            {tableTitles.slice(4, 15).map((tableTitle, index: number) => (
              <th className={styles.tr} key={index}>
                <h4 className={styles["table-titles"]}>{tableTitle}</h4>
              </th>
            ))}
          </tr>
        </thead>
        <thead>
          {/* Table rows displaying team data */}
          {sortedTeamsByPointsAndStrength.map((team, index) => (
            <tr key={index}>
              {[
                index + 1,
                team.name,
                team.played,
                team.win,
                team.draw,
                team.loss,
                team.for,
                team.against,
                team.for - team.against,
                team.points,
                team.strength,
              ].map((item, id) => (
                <td key={id}>{item}</td>
              ))}
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};

export default StandingTable;
