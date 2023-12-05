// Represents a team's statistics
export type Team = {
  id: number; // Team ID
  name: string; // Team name
  played: number; // Matches played
  win: number; // Matches won
  draw: number; // Matches drawn
  loss: number; // Matches lost
  for: number; // Goals scored
  against: number; // Goals conceded
  points: number; // Total points
  score: number; // Team's overall score
  strength: number; // Team's strength
};

// Represents the result of a match (scores for home and away teams)
export type Result = {
  home: number | null; // Score for the home team (null if not played)
  away: number | null; // Score for the away team (null if not played)
};

// Represents a match with home and away teams and the match result
export type Match = {
  home: Team; // Home team
  away: Team; // Away team
  result: Result; // Result of the match
};

// Represents a round of matches
export type MatchRound = Match[];

// Represents multiple rounds of matches
export type MatchRounds = MatchRound[];

// Represents an array of strings used as table headers
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
  | "-/+"
  | "Points"
  | "Strength"
  | "Match Standings"
  | "Shoot"
  | "Match Schedule"
  | "World Football Championship"
  | "Final"
)[];
