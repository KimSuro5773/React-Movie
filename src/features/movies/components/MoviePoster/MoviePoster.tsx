import { getPosterUrl } from "@features/movies/utils";
import { ImageOff } from "lucide-react";
import type { API_CONFIG } from "@/lib/api/config";

type PosterSize = keyof typeof API_CONFIG.POSTER_SIZES;

type MoviePosterProps = {
  poster_path: string | null;
  title: string;
  size?: PosterSize;
  className?: string;
};

function MoviePoster({ poster_path, title, size = "MEDIUM", className = "" }: MoviePosterProps) {
  const imgPath = getPosterUrl(poster_path, size);

  return (
    <div className={`relative aspect-3/4 overflow-hidden ${className}`}>
      {imgPath ? (
        <img
          src={imgPath}
          alt={`${title} 포스터`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-muted">
          <ImageOff className="size-12 text-muted-foreground" />
          <p className="text-xs text-muted-foreground text-center px-4">포스터 없음</p>
        </div>
      )}
    </div>
  );
}

export { MoviePoster };
