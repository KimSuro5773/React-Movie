import { getPosterUrl } from "@features/movies/utils";
import { ImageOff } from "lucide-react";

type MoviePosterProps = {
  poster_path: string | null;
  title: string;
};

function MoviePoster({ poster_path, title }: MoviePosterProps) {
  const imgPath = getPosterUrl(poster_path);

  return (
    <div className="relative aspect-3/4 overflow-hidden">
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
