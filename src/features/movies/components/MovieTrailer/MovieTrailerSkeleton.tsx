import { Skeleton } from "@/components/ui";

function MovieTrailerSkeleton() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Skeleton className="aspect-video rounded-lg" />
      </div>
    </section>
  );
}

export { MovieTrailerSkeleton };
