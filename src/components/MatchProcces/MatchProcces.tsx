import {
  Team,
  MatchRound,
  MatchRounds,
  baseMatchRounds,
  getRandomNumber,
} from "../components";

const matchProcces = (): MatchRounds => {
  // Function to update team statistics
  const updateTeamStats = (
    team: Team,
    score: number,
    points: number,
    win: number,
    draw: number,
    loss: number,
    strength: number
  ) => {
    team.score = score;
    team.points += points;
    team.win += win;
    team.draw += draw;
    team.loss += loss;
    team.strength += strength;
  };

  // Generating a new full round of matches
  const newFullRound: MatchRound[] = baseMatchRounds?.map(
    (matchRound: MatchRound) => {
      return matchRound?.map(({ home, away, result }) => {
        // Generating random scores for home and away teams
        const homeScore: number = getRandomNumber();
        const awayScore: number = getRandomNumber();

        // Determining the winner
        const homeWin: boolean = homeScore > awayScore;
        const awayWin: boolean = homeScore < awayScore;

        // Updating result scores
        result.home = homeScore;
        result.away = awayScore;

        // Updating match and team statistics
        home.played += 1;
        away.played += 1;

        home.for += homeScore;
        away.for += awayScore;
        home.against += awayScore;
        away.against += homeScore;

        // Updating team stats based on match result
        if (homeWin) {
          updateTeamStats(home, homeScore, 3, 1, 0, 0, homeScore + 4);
          updateTeamStats(away, awayScore, 0, 0, 0, -1, awayScore * 2 - 1);
        } else if (awayWin) {
          updateTeamStats(home, homeScore, 0, 0, 0, -1, homeScore - 1);
          updateTeamStats(away, awayScore, 3, 1, 0, 0, awayScore * 2 + 4);
        } else {
          updateTeamStats(home, homeScore, 1, 0, 1, 0, homeScore + 2);
          updateTeamStats(away, awayScore, 1, 0, 1, 0, awayScore * 2 + 2);
        }

        return {
          home: home,
          away: away,
          result: {
            home: homeScore,
            away: awayScore,
          },
        };
      });
    }
  );

  return newFullRound;
};

export default matchProcces;
