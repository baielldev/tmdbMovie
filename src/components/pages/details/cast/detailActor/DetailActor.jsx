import { useEffect, useState } from "react";
import scss from "./DetailActor.module.scss";
import { useMoviesStore } from "../../../../../store/useMoviesStore";
import { Link, useParams } from "react-router-dom";
import notImg from "../../../../../assets/Снимок экрана 2025-06-21 в 15.28.03.png";
const DetailActor = () => {
  const {
    detailActor,
    getDetailActor,
    getDetailActorFameFor,
    actorFameFor,
    mediaTypePopular,
    mediaTypeTopRated,
  } = useMoviesStore();
  const [showMore, setShowMore] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getDetailActor(id);
    getDetailActorFameFor(id);
  }, [id]);

  const words = detailActor.biography ? detailActor.biography.split("") : [];
  const longWords = words.length > 300;
  const shortWords = words.slice(0, 300).join("") + "...";

  return (
    <div className={scss.detailActor}>
      <div className="container">
        <div className={scss.content}>
          <img
            src={
              detailActor.profile_path
                ? `https://image.tmdb.org/t/p/original/${detailActor.profile_path}`
                : notImg
            }
            alt={`${detailActor.name || "Actor"}`}
          />
          <div className={scss.content_info}>
            <h1>{detailActor.name}</h1>
            <div className={scss.content_bio}>
              <h2>Biography</h2>
              <p>
                {showMore || !longWords ? detailActor.biography : shortWords}
                {longWords && (
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className={scss.showMoreButton}
                  >
                    {showMore ? "Show less" : "Show more"}
                  </button>
                )}
              </p>
            </div>
            <p>Fame for</p>
            <div className={scss.fameFor}>
              {Array.isArray(actorFameFor) &&
                actorFameFor.map((item, index) => (
                  <div key={index} className={scss.fameMovie}>
                    <Link
                      to={`/${mediaTypePopular || mediaTypeTopRated}/${
                        item.id
                      }`}
                    >
                      <img
                        src={
                          item.backdrop_path
                            ? `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${item.backdrop_path}`
                            : notImg
                        }
                        alt={item.title || "Movie"}
                      />
                    </Link>

                    <p>{item.title || "No title available"}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className={scss.title}>
          <h1>Personal information</h1>
        </div>
        <div className={scss.actorInformation}>
          <div className={scss.information}>
            <h1>Name</h1>
            <p>{detailActor.name}</p>
          </div>
          <div className={scss.information}>
            <h1>Fame For</h1>
            <p>{detailActor.known_for_department}</p>
          </div>
          <div className={scss.information}>
            <h1>Date of birth</h1>
            <p>{detailActor.birthday || "N/A"}</p>
          </div>
          <div className={scss.information}>
            <h1>Place of birth</h1>
            <p>{detailActor.place_of_birth || "N/A"}</p>
          </div>
          <div className={scss.information}>
            <h1>Also known as</h1>
            <p>
              {Array.isArray(detailActor.also_known_as)
                ? detailActor.also_known_as.join(", ")
                : "N/A"}
            </p>
          </div>
          <div className={scss.information}>
            <h1>Rating</h1>
            <p>{detailActor.popularity} ⭐</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailActor;
