import { X } from "lucide-react";
import { Button } from "@/components/ui";
import { SLIDER_ITEMS } from "@/shared/constants/sliderConstants";
import { Link, useLocation } from "react-router-dom";

interface SliderProps {
  isSliderOpen: boolean;
  onClose: () => void;
}

function Slider({ isSliderOpen, onClose }: SliderProps) {
  const location = useLocation();

  return (
    <>
      {/* 오버레이 */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300
          ${isSliderOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      ></div>

      <div
        className={`bg-[#121212] fixed top-0 left-0 h-full w-64 md:w-72 lg:w-80 xl:w-96 z-50 transition-transform duration-300 flex flex-col
          ${isSliderOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-bold">카테고리</h2>
          <Button variant={"ghost"} size={"icon"} onClick={onClose} aria-label="Close">
            <X />
          </Button>
        </div>

        <nav className="py-12 px-4 flex flex-col gap-3 flex-1 space-y-3 overflow-y-auto">
          {SLIDER_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.id}
                to={item.path}
                className={`flex items-center gap-3 rounded-full py-2 hover:bg-white/10 px-3 transition-colors duration-200 
                    ${isActive ? " text-white" : "text-muted-foreground  hover:text-white"}
                  `}
                onClick={onClose}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

export default Slider;
