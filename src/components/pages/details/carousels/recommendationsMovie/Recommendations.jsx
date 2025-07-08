import { useEffect } from "react";
import Carousel from "../../../../../ui/Carousel/Carousel";
import { useMoviesStore } from "../../../../../store/useMoviesStore";

const Recommendations = ({ id }) => {
  const { getRecommendationsMovies, recommendationsMovie } = useMoviesStore();
  useEffect(() => {
    getRecommendationsMovies(id);
  }, [id]);
  return (
    <div className="container">
      {recommendationsMovie.length > 0 ? (
        <>
          <h1>Recommendations</h1>
          <Carousel data={recommendationsMovie} />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Recommendations;
