import { Button } from "@/components/ui";
import { Home, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto flex min-h-[70vh] items-center justify-center px-4">
      <div className="flex flex-col items-center gap-8 text-center">
        {/* 404 텍스트 */}
        <div className="space-y-4">
          <h1 className="text-8xl md:text-9xl font-bold text-primary">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold">페이지를 찾을 수 없습니다</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-md">
            요청하신 페이지가 존재하지 않습니다.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            이전 페이지
          </Button>
          <Button onClick={() => navigate("/")} className="flex items-center gap-2">
            <Home className="w-4 h-4" />
            홈으로 가기
          </Button>
        </div>
      </div>
    </div>
  );
}

export { NotFound };
