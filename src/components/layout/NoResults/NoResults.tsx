import { SearchX } from "lucide-react";

interface NoResultProps {
  message?: string;
  description?: string;
}

function NoResults({
  message = "데이터가 없습니다.",
  description = "나중에 다시 확인해주세요.",
}: NoResultProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <div className="text-6xl">
          <SearchX className="w-16 h-16 text-gray-400 dark:text-gray-500" strokeWidth={1.5} />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{message}</h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-md">{description}</p>
      </div>
    </div>
  );
}

export { NoResults };
