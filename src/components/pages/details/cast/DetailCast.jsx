import { useEffect } from "react";
import { useMoviesStore } from "../../../../store/useMoviesStore";
import scss from "./DetailCast.module.scss";
import { Link } from "react-router-dom";
import notImgPerson from "../../../../assets/Снимок экрана 2025-06-21 в 15.31.15.png";

const DetailCast = ({ id }) => {
  const { getActors, actorMovie } = useMoviesStore();
  useEffect(() => {
    getActors(id);
  }, [id]);

  return (
    <div className={scss.detailCast}>
      <div className="container">
        <div className={scss.cast_title}>
          <h1>Top Cast</h1>
        </div>
        <div className={scss.content}>
          {actorMovie.length > 0
            ? actorMovie.map((item, index) => (
                <div key={index} className={scss.cast}>
                  <Link to={`/person/${item.id}`}>
                    <img
                      src={
                        item.profile_path
                          ? `https://image.tmdb.org/t/p/original/${item.profile_path}`
                          : notImgPerson
                      }
                      alt="actors"
                    />
                  </Link>
                  <h1>{item.name}</h1>
                </div>
              ))
            : "no information about the actor"}
        </div>
      </div>
    </div>
  );
};

export default DetailCast;
