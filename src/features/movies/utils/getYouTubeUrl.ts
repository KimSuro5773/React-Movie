export const getYouTubeUrl = (videoKey: string, autoplay = false): string => {
  const baseUrl = "https://www.youtube.com/embed";
  const params = autoplay ? "?autoplay=1" : "";
  return `${baseUrl}/${videoKey}${params}`;
};
