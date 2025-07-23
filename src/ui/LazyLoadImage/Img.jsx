import { useEffect, useState } from "react";
import { useMoviesStore } from "../../store/useMoviesStore";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Img = () => {
  const { moviesPopular, getPopular, loader } = useMoviesStore();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    getPopular();
  }, []);

  useEffect(() => {
    if (moviesPopular.length > 0) {
      const index = Math.floor(Math.random() * moviesPopular.length);
      setRandomMovie(moviesPopular[index]);
    }
  }, [moviesPopular]);

  const imageBaseURL = "https://image.tmdb.org/t/p/original";
  const imageUrl = randomMovie?.backdrop_path
    ? `${imageBaseURL}${randomMovie.backdrop_path}`
    : null;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "680px",
        overflow: "hidden",
        backgroundColor: "#111",
      }}
    >
      {!imageUrl && (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#222",
            animation: "pulse 1.5s infinite",
          }}
        />
      )}

      {imageUrl && (
        <LazyLoadImage
          alt="Banner"
          src={imageUrl}
          width="100%"
          height="680px"
          afterLoad={() => setImgLoaded(true)}
          style={{
            objectFit: "cover",
            backgroundPosition: "center",
            transition: "opacity 1s ease-in-out",
            opacity: imgLoaded ? 1 : 0,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      )}
    </div>
  );
};

export default Img;
