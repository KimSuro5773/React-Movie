import type { Videos, VideosItem } from "@features/movies/types/movie";

export const getYouTubeTrailers = (videos?: Videos): VideosItem[] => {
  return (
    videos?.results.filter((video) => video.site === "YouTube" && video.type === "Trailer") ?? []
  );
};
