import React from "react";
import { MatchRounds, Team } from "../components";
import styles from "./StandingTableSingle.module.scss";

// Define the props for the StandingTable component
type StandingTableSingleProps = {
  tableTitles: string[];
  allMatchRounds: MatchRounds[];
  sortedTeamsByPointsAndStrength: Team[];
};

const StandingTableSingle: React.FC<StandingTableSingleProps> = ({
  tableTitles,
  sortedTeamsByPointsAndStrength,
}) => {
  return (
    <table className={styles["chart"]}>
      <thead>
        <tr>
          {tableTitles.slice(4, 15).map((tableTitle, index: number) => (
            <th key={index}>
              <h4 className={styles["table-headers"]}>{tableTitle}</h4>
            </th>
          ))}
        </tr>
      </thead>
      <thead>
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
              <td className={styles["table-cell"]} key={id}>
                {item}
              </td>
            ))}
          </tr>
        ))}
      </thead>
    </table>
  );
};

export default StandingTableSingle;
