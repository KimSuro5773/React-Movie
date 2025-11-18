import { Route, Routes } from "react-router-dom";
import { PATHS } from "./paths";
import { Home, MovieDetail, NotFound, NowPlaying, Popular, TopRated, Upcoming } from "@/pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<Home />} />
      <Route path={PATHS.NOW_PLAYING} element={<NowPlaying />} />
      <Route path={PATHS.POPULAR} element={<Popular />} />
      <Route path={PATHS.TOP_RATED} element={<TopRated />} />
      <Route path={PATHS.UPCOMING} element={<Upcoming />} />
      <Route path={PATHS.MOVIE_DETAIL} element={<MovieDetail />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
