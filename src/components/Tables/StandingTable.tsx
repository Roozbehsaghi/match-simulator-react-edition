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
  sortedTeamsByPointsAndStrength,
}) => {
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
              <td>{index + 1}.</td>
              <td>{team.name}</td>
              <td>{team.played}</td>
              <td>{team.win}</td>
              <td>{team.draw}</td>
              <td>{team.loss}</td>
              <td>{team.for}</td>
              <td>{team.against}</td>
              <td>{team.for - team.against}</td>
              <td>{team.points}</td>
              <td>{team.strength}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};

export default StandingTable;
