import { PATHS } from "@/routes/paths";
import { Clapperboard, Clock, House, Sparkles, Trophy } from "lucide-react";

interface SliderItem {
  id: number;
  label: string;
  icon: React.ReactNode;
  path: string;
}

export const SLIDER_ITEMS: SliderItem[] = [
  {
    id: 1,
    label: "홈",
    icon: <House />,
    path: PATHS.HOME,
  },
  {
    id: 2,
    label: "현재 상영중",
    icon: <Clapperboard />,
    path: PATHS.NOW_PLAYING,
  },
  {
    id: 3,
    label: "인기",
    icon: <Sparkles />,
    path: PATHS.POPULAR,
  },
  {
    id: 4,
    label: "최고 평점",
    icon: <Trophy />,
    path: PATHS.TOP_RATED,
  },
  {
    id: 5,
    label: "개봉 예정",
    icon: <Clock />,
    path: PATHS.UPCOMING,
  },
];
