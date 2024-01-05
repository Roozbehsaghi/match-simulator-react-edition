import {
  Team,
  MatchRounds,
  Match,
  LocalHost,
  DefaultRoutes,
  Group,
  GroupWithMatches,
  TransformedGroupsArray,
} from "../components";

// Utility function to generate a random number between 0 and 7
export const getRandomNumber = (): number => Math.floor(Math.random() * 8);

// Function to create a team object
export const createTeam = (id: number, name: string): Team => ({
  id,
  name,
  played: 0,
  win: 0,
  draw: 0,
  loss: 0,
  for: 0,
  against: 0,
  points: 0,
  score: 0,
  strength: 0,
});

// List of country names, grouped
export const listOfCountryNames: string[][] = [
  ["Qatar", "Ecuador", "Senegal", "Netherlands"],
  ["England", "Iran", "USA", "Wales"],
  ["Argentina", "Saudi Arabia", "Mexico", "Poland"],
  ["France", "Australia", "Denmark", "Tunisia"],
  ["Spain", "Costa Rica", "Germany", "Japan"],
  ["Belgium", "Canada", "Morocco", "Croatia"],
  ["Brazil", "Serbia", "Switzerland", "Cameroon"],
  ["Portugal", "Ghana", "Uruguay", "Republic of Korea"],
];

export const teams: Team[] = listOfCountryNames
  .flat()
  .map((country, index) => createTeam((index % 4) + 1, country));

// Define group names
export const groupNames: string[] = [
  "Group A",
  "Group B",
  "Group C",
  "Group D",
  "Group E",
  "Group F",
  "Group G",
  "Group H",
];

// Group teams into respective groups and transform their structure into an array
export const transformedGroupsArray: TransformedGroupsArray = groupNames.map(
  (groupName, groupIndex) => ({
    groupName,
    teams: teams
      .slice(groupIndex * 4, (groupIndex + 1) * 4)
      .reduce((groupAcc, team, index) => {
        const teamName = `Team${String.fromCharCode(65 + index)}`;
        groupAcc[teamName] = { ...team, id: index + 1 };
        return groupAcc;
      }, {} as Group),
  })
);

// Define specific teams for easy access
export const [teamA, teamB, teamC, teamD] = teams.slice(0, 4);

// Define initial match rounds with teams
export const baseMatchRounds: MatchRounds = [
  // Round 1
  [
    { home: teamA, away: teamD, result: { home: null, away: null } },
    { home: teamC, away: teamB, result: { home: null, away: null } },
  ],
  // Round 2
  [
    { home: teamB, away: teamA, result: { home: null, away: null } },
    { home: teamD, away: teamC, result: { home: null, away: null } },
  ],
  // Round 3
  [
    { home: teamD, away: teamB, result: { home: null, away: null } },
    { home: teamC, away: teamA, result: { home: null, away: null } },
  ],
];

// Function to initialize match rounds for groups in a round-robin format
export const initializeMatchRoundsWithGroups = (
  groups: TransformedGroupsArray
): GroupWithMatches[] => {
  const matchRoundsWithGroups: GroupWithMatches[] = [];

  groups.forEach((group) => {
    const groupTeams = Object.values(group.teams);
    const groupMatches: Match[] = [];

    for (let i = 0; i < groupTeams.length; i++) {
      for (let j = i + 1; j < groupTeams.length; j++) {
        groupMatches.push({
          home: groupTeams[i],
          away: groupTeams[j],
          result: { home: null, away: null },
        });
      }
    }

    matchRoundsWithGroups.push({
      groupName: group.groupName,
      matches: groupMatches,
    });
  });

  return matchRoundsWithGroups;
};

// Usage
export const baseMatchRoundsWithGroups = initializeMatchRoundsWithGroups(
  transformedGroupsArray
);

// Sort teams by points and strength in descending order
export const sortByPointsAndStrengthDescending = (arr: Team[]): Team[] =>
  arr.sort((a, b) => b.points - a.points || b.strength - a.strength);

// Get all unique teams from matches
export const getAllTeams = (arr: Match[]): Team[] =>
  Array.from(
    new Set(arr.flatMap((match) => [match.home, match.away])).values()
  );

// LocalHost and default routes
export const localHost: LocalHost = "http://localhost:3000/";

// All default routes
export const defaultRoutes: DefaultRoutes = {
  homePage: "",
  semiFinal: "semi-final",
  countriesGroup: "countries-group",
  countryGroup: "country-group",
  standingTableGroups: "standing-table-groups",
};
