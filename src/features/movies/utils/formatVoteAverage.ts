export const formatVoteAverage = (vote_average: number): string => {
  const voteAverage = Math.floor(vote_average * 10) / 10;
  return voteAverage.toFixed(1);
};
