import SignUp from "../authentication/SignUp/SignUp";
import DetailActor from "../components/pages/details/cast/detailActor/DetailActor";
import DetailsPage from "../components/pages/details/DetailsPage";
import MoviesPage from "../components/pages/moviesPage/MoviesPage";
import Search from "../components/pages/search/Search";
import TvShowPage from "../components/pages/tvShowPage/TvShowPage";
import Home from "../home/Home";

export const navHeader = [
  {
    name: "Movies",
    path: "/movies",
  },
  {
    name: "TV Shows",
    path: "/tv-shows",
  },
];

export const route = [
  {
    link: "/",
    element: <Home />,
  },
  {
    link: "/movies",
    element: <MoviesPage />,
  },
  {
    link: "/tv-shows",
    element: <TvShowPage />,
  },
  {
    link: "/:mediaType/:id",
    element: <DetailsPage />,
  },

  {
    link: "/person/:id",
    element: <DetailActor />,
  },
  {
    link: "/search/:movieName",
    element: <Search />,
  },
  {
    link: "/sign-up",
    element: <SignUp />,
  },
];
