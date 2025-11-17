export const formatVoteAverage = (vote_average: number) => {
  return Math.floor(vote_average * 10) / 10;
};
