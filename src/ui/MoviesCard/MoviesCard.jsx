import scss from "./MoviesCard.module.scss";
import { Link } from "react-router-dom";
import notImg from "../../assets/Снимок экрана 2025-06-21 в 15.28.03.png";

const MoviesCard = ({ item, mediaType }) => {
  const linkMediaType = mediaType || (item.first_air_date ? "tv" : "movie");

  return (
    <div className={scss.card}>
      <div className={scss.card_list}>
        <div className={scss.card_box}>
          <Link to={`/${linkMediaType}/${item.id}`}>
            <img
              src={
                item.poster_path
                  ? `https://media.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`
                  : notImg
              }
              alt={`${item.title || item.original_name} poster`}
            />
          </Link>
          <div className={scss.card_info}>
            <h1 className={scss.movieTitle}>
              {item.title || item.original_name}
            </h1>
            <p>{item.release_date || item.first_air_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
