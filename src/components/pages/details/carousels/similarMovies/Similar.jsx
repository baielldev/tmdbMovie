import { useEffect } from "react";
import Carousel from "../../../../../ui/Carousel/Carousel";
import { useMoviesStore } from "../../../../../store/useMoviesStore";

const Similar = ({ id }) => {
  const { getSimilarMovies, similarMovies } = useMoviesStore();
  useEffect(() => {
    getSimilarMovies(id);
  }, [id]);
  return (
    <div className="container">
      {similarMovies.length > 0 ? (
        <>
          <h1>Similar</h1>
          <Carousel data={similarMovies} />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Similar;
