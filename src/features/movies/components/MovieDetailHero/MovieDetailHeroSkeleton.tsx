import { Skeleton } from "@/components/ui";

function MovieDetailHeroSkeleton() {
  return (
    <section className="relative min-h-[600px]">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* 포스터 스켈레톤 */}
          <div className="shrink-0 w-full md:w-80">
            <Skeleton className="aspect-2/3 w-full rounded-lg" />
          </div>

          {/* 정보 영역 스켈레톤 */}
          <div className="flex-1 space-y-4">
            {/* 제목 */}
            <Skeleton className="h-10 w-3/4 md:h-12" />

            {/* 평점 */}
            <Skeleton className="h-6 w-40" />

            {/* 장르 태그들 */}
            <div className="flex gap-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-16" />
            </div>

            {/* 메타 정보 */}
            <div className="flex gap-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-20" />
            </div>

            {/* 줄거리 */}
            <div className="space-y-2">
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            {/* 버튼 */}
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>
    </section>
  );
}

export { MovieDetailHeroSkeleton };
