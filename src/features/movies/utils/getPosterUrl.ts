import { API_CONFIG } from "@/lib/api/config";

type PosterSize = keyof typeof API_CONFIG.POSTER_SIZES;

export const getPosterUrl = (path: string | null, size: PosterSize = "MEDIUM") => {
  if (!path) return null;

  const width = API_CONFIG.POSTER_SIZES[size];
  return `${API_CONFIG.IMAGE_BASE_URL}/${width}${path}`;
};
