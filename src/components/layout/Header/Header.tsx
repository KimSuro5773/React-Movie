import { Menu, Search } from "lucide-react";
import { Button, Input } from "@/components/ui";
import Slider from "./Slider";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isSliderOpen, setIsSliderOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/movie/search/${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <header className="z-10 w-full flex items-center justify-center bg-[#121212]">
        <div className="w-full max-w-screen-2xl flex items-center justify-between px-6 py-3 gap-10">
          {/* Logo */}
          <Link to={"/"}>
            <img src="./svg/react.svg" alt="LOGO" className="w-6 md:w-7" />
          </Link>

          {/* SearchBar */}
          <div className="relative flex w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-muted-foreground md:w-5 md:h-5" />
            </div>

            <form onSubmit={handleSearch} className="flex flex-1">
              <Input
                type="text"
                placeholder="검색"
                value={searchQuery}
                onChange={handleInputChange}
                className="flex-1 pl-10 text-sm md:text-base"
              />
              <Button type="submit" variant="outline" className="ml-2 hidden sm:flex">
                검색
              </Button>
            </form>
          </div>

          {/* MenuButton */}
          <Button
            variant="ghost"
            className="text-white"
            aria-label="Menu"
            size="icon-lg"
            onClick={() => setIsSliderOpen(true)}
          >
            <Menu className="size-6 md:size-7" />
          </Button>
        </div>
      </header>

      <Slider isSliderOpen={isSliderOpen} onClose={() => setIsSliderOpen(false)} />
    </>
  );
}

export { Header };
