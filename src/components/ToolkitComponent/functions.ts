import { Team, MatchRounds, Match } from "./types";

// Function to generate a random number between 0 and 7
export const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 8);
};

// Function to create a team with initial stats
export const createTeam = (id: number, name: string): Team => {
  return {
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
  };
};

// Creating teams
export const teamA = createTeam(1, "Qatar");
export const teamB = createTeam(2, "Ecuador");
export const teamC = createTeam(3, "Senegal");
export const teamD = createTeam(4, "Netherlands");

// Initial match rounds with teams and initial match results
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

// Function to sort teams by points and strength in descending order
export const sortByPointsAndStrengthDescending = (arr: Team[]): Team[] => {
  return arr.sort((teamA, teamB) => {
    // Sort by points in descending order
    if (teamB.points !== teamA.points) {
      return teamB.points - teamA.points;
    }

    // If points are equal, sort by strength in descending order
    return teamB.strength - teamA.strength;
  });
};

// Function to get all unique teams from matches
export const getAllTeams = (arr: Match[]): Team[] => {
  const teamsSet: Set<number> = new Set(); // To ensure unique teams
  const teams: Team[] = [];

  for (const match of arr) {
    if (match.home && !teamsSet.has(match.home.id)) {
      teams.push(match.home);
      teamsSet.add(match.home.id);
    }

    if (match.away && !teamsSet.has(match.away.id)) {
      teams.push(match.away);
      teamsSet.add(match.away.id);
    }
  }

  return teams;
};
