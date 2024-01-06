// Team statistics and match-related types
export type Team = {
  id: number;
  name: string;
  played: number;
  win: number;
  draw: number;
  loss: number;
  for: number;
  against: number;
  points: number;
  score: number;
  strength: number;
};

export type Result = { home: number | null; away: number | null };
export type Match = { home: Team; away: Team; result: Result };
export type MatchRound = Match[];
export type MatchRounds = MatchRound[];

export type Group = Record<string, Team>;
export type TransformedGroup = { groupName: string; teams: Group };
export type TransformedGroupsArray = TransformedGroup[];

export type GroupWithMatches = {
  groupName: string;
  teams: Team[]; // Add this line if it's not already there
  matches: Match[];
};

// Table titles
export type TableTitles = (
  | "Round"
  | "Home"
  | "Score"
  | "Away"
  | "Position"
  | "Team"
  | "Played"
  | "Win"
  | "Draw"
  | "Loss"
  | "For"
  | "Against"
  | "GD"
  | "Points"
  | "Strength"
  | "Match Rounds"
  | "Shoot"
  | "Match Standings"
  | "World Football Championship"
  | "Semi Final"
  | "Final Groups"
  | "Group A"
  | "Group B"
  | "Group C"
  | "Group D"
  | "Group E"
  | "Group F"
  | "Group G"
  | "Group H"
  | "Back to Home"
  | "Roozbeh"
  | "Standing Table Groups"
  | "Countries Group"
  | "Match Schedule"
  | "Round of 16"
  | "Quarter Finals"
  | "Final Match"
  | "FIFA"
)[];
export type ListOfCountryNames = string[][];

// Local host and routing types
export type LocalHost = string;
export type DefaultRoutes = {
  homePage: string;
  semiFinal: string;
  countriesGroup: string;
  countryGroup: string;
  standingTableGroups: string;
};
