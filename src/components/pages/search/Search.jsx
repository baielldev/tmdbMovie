import { useEffect } from "react";
import scss from "./Search.module.scss";
import { useMoviesStore } from "../../../store/useMoviesStore";
import { Link, useParams } from "react-router-dom";
import notImg from "../../../assets/Снимок экрана 2025-06-21 в 15.28.03.png";

const Search = () => {
  const { getSearchMovie, searchMovie } = useMoviesStore();
  const name = useParams();
  useEffect(() => {
    getSearchMovie(name.movieName);
  }, [name.movieName]);

  return (
    <div className={scss.search}>
      <div className="container">
        <div className={scss.content}>
          {searchMovie.map((item, index) => (
            <div key={index} className={scss.movie_box}>
              <Link to={`/movie/${item.id}`}>
                <img
                  src={
                    item.poster_path
                      ? `https://media.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`
                      : notImg
                  }
                  alt={`${item.title} poster`}
                />
              </Link>
              <div className={scss.card_info}>
                <h1 className={scss.movieTitle}>
                  {item.title ? item.title : item.original_name}
                </h1>
                <p>
                  {item.release_date ? item.release_date : item.first_air_date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
