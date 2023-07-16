import HomePage from "../pages/home/homePage";
import MoviesPage from "../pages/movies/moviesPage";
import TvShowsPage from "../pages/tvShows/tvShowsPage";
import SuggestMePage from "../pages/suggestMe/suggestMePage";

const routes = [
  {
    path: "",
    element: <HomePage />,
    title: "home",
  },
  {
    path: "moviesPage",
    element: <MoviesPage />,
    title: "moviesPage",
  },
  {
    path: "tvShowsPage",
    element: <TvShowsPage />,
    title: "tvShowsPage",
  },
  {
    path: "suggestMePage",
    element: <SuggestMePage />,
    title: "suggestMePage",
  },
];

export default routes;
