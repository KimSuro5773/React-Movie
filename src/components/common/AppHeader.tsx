import { Menu, Search } from "lucide-react";
import { Button, Input } from "../ui";

function AppHeader() {
  return (
    <header className="z-10 w-full flex items-center justify-center bg-[#121212]">
      <div className="w-full max-w-screen-2xl flex items-center justify-between px-6 py-3 gap-10">
        {/* Logo */}
        <img src="./svg/react.svg" alt="LOGO" className="w-6 md:w-7" />

        {/* SearchBar */}
        <div className="relative flex w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-muted-foreground md:w-5 md:h-5" />
          </div>

          <div className="flex flex-1">
            <Input type="text" placeholder="검색" className="flex-1 pl-10 text-sm md:text-base" />
            <Button type="submit" variant="outline" className="ml-2 hidden sm:flex">
              검색
            </Button>
          </div>
        </div>

        {/* MenuButton */}
        <Button variant="ghost" className="text-white" aria-label="Menu" size="icon-lg">
          <Menu className="size-6 md:size-7" />
        </Button>
      </div>
    </header>
  );
}

export { AppHeader };
