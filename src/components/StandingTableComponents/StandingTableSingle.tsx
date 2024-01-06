import React from "react";
import { Team } from "../components";
import styles from "./StandingTableSingle.module.scss";

// Define the props for the StandingTable component
type StandingTableSingleProps = {
  tableTitles: string[];
  countryNames: Team[];
};

const StandingTableSingle: React.FC<StandingTableSingleProps> = ({
  tableTitles,
  countryNames,
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
        {countryNames.map((team, index) => {
          return (
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
          );
        })}
      </thead>
    </table>
  );
};

export default StandingTableSingle;
