import { API_CONFIG } from "@/lib/api/config";

type BackdropSize = keyof typeof API_CONFIG.BACKDROP_SIZES;

export const getBackdropUrl = (path: string | null, size: BackdropSize = "MEDIUM") => {
  if (!path) return null;

  const width = API_CONFIG.BACKDROP_SIZES[size];
  return `${API_CONFIG.IMAGE_BASE_URL}/${width}${path}`;
};
