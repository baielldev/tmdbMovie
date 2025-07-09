import scss from "./DetailBanner.module.scss";
import { useMoviesStore } from "../../../../store/useMoviesStore";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useEffect, useState } from "react";
import notImg from "../../../../assets/Снимок экрана 2025-06-21 в 15.28.03.png";
import SkeletonBanner from "../../../../ui/skeleton/bannerSkeleton/SkeletonBanner";

const DetailBanner = ({ id }) => {
  const { oneMovie, trailer, getTrailerMovie, loader } = useMoviesStore();

  const [modalWindow, setModalWindow] = useState(false);
  const [videoKey, setVideoKey] = useState("");
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    getTrailerMovie(id);
  }, [id]);

  const openModal = (key) => {
    setVideoKey(key);
    setModalWindow(true);
  };

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const rounded =
    typeof oneMovie.vote_average === "number"
      ? oneMovie.vote_average.toFixed(1)
      : "N/A";

  const getColor = (value) => {
    if (typeof value !== "number") return "#cccccc";
    if (value > 7) return "#008000";
    if (value >= 4.5) return "#ffa500";
    return "#ff0000";
  };

  const words = oneMovie.overview ? oneMovie.overview.split("") : [];
  const longWords = words.length > 300;
  const shortWords = words.slice(0, 300).join("") + "...";

  if (loader) {
    return <SkeletonBanner />;
  }

  return (
    <div className={scss.detailBanner}>
      <img
        className={scss.backgroundBanner}
        src={`https://image.tmdb.org/t/p/original/${oneMovie.backdrop_path}`}
        alt="background"
      />
      <div className="container">
        <div className={scss.content}>
          <img
            src={
              oneMovie.poster_path
                ? `https://image.tmdb.org/t/p/original/${oneMovie.poster_path}`
                : notImg
            }
            alt="detail"
          />
          <div className={scss.content_text}>
            <div className={scss.text_title}>
              <h1>{oneMovie.title || oneMovie.original_name}</h1>
              <p>{oneMovie.tagline}</p>
            </div>
            <div className={scss.content_action}>
              <div className={scss.rating_wrapper}>
                <CircularProgressbar
                  value={oneMovie.vote_average}
                  maxValue={10}
                  text={rounded}
                  styles={buildStyles({
                    pathColor: getColor(oneMovie.vote_average),
                    trailColor: "#fff",
                    textColor: "#fff",
                    textSize: "24px",
                    pathTransitionDuration: 0.5,
                    strokeLinecap: "round",
                  })}
                />
              </div>

              <div
                className={scss.playbtn}
                onClick={() => openModal(trailer.key)}
              >
                <svg viewBox="0 0 213.7 213.7">
                  <polygon
                    className={scss.triangle}
                    points="73.5,62.5 148.5,105.8 73.5,149.1"
                  />
                  <circle
                    className={scss.circle}
                    cx="106.8"
                    cy="106.8"
                    r="103.3"
                  />
                </svg>
                <span className={scss.textTriler}>Watch Trailer</span>
              </div>
            </div>
            <div className={scss.text_description}>
              <h1>Overview</h1>
              <p>
                {showMore || !longWords ? oneMovie.overview : shortWords}
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
            <div className={scss.text_info}>
              <div className={scss.status}>
                <div className={scss.status_text}>
                  <h1>Status:</h1>
                  <p>{oneMovie.status}</p>
                </div>
                <div className={scss.status_text}>
                  <h1>Release Date:</h1>
                  <p>
                    {formatDate(
                      oneMovie.release_date || oneMovie.first_air_date
                    )}
                  </p>
                </div>
                <div className={scss.status_text}>
                  <h1>Runtime:</h1>
                  <p>
                    {oneMovie.runtime ? formatRuntime(oneMovie.runtime) : "N/A"}
                  </p>
                </div>
              </div>
              <div className={scss.director}>
                <h1>Director:</h1>
                <p>Michael Pearce</p>
              </div>
              <div className={scss.writter}>
                <h1>Writer:</h1>
                <p>Brad Ingelsby</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalWindow && (
        <div className={scss.modalOpen} onClick={() => setModalWindow(false)}>
          <iframe
            width="951"
            height="535"
            src={`https://www.youtube.com/embed/${videoKey}`}
            title={trailer.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default DetailBanner;
