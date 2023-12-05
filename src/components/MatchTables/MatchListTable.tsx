// Import necessary types and styles
import { MatchRounds, Team } from "../components";
import styles from "./MatchListTable.module.scss";

// Define the props for the MatchListTable component
type Props = {
  tableTitles: string[];
  allMatchRounds: MatchRounds[];
  sortedTeamsByPointsAndStrength: Team[];
};

// MatchListTable component
const MatchListTable = ({
  tableTitles,
  sortedTeamsByPointsAndStrength,
}: Props) => {
  return (
    <div>
      {/* Table header displaying the title */}
      <h2 className={styles["text-header"]}>{tableTitles[17]}</h2>

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
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
};

// Export the MatchListTable component
export default MatchListTable;
