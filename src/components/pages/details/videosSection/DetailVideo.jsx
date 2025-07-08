import { useEffect, useState } from "react";
import scss from "./DetailVideo.module.scss";
import { useMoviesStore } from "../../../../store/useMoviesStore";

const DetailVideo = ({ id }) => {
  const { trailerMovie, getDetailOfficialTrailer } = useMoviesStore();
  const [modalWindow, setModalWindow] = useState(false);
  const [videoKey, setVideoKey] = useState("");
  useEffect(() => {
    getDetailOfficialTrailer(id);
  }, [id]);

  const openModal = (key) => {
    setVideoKey(key);
    setModalWindow(true);
  };

  return (
    <div className={scss.detailVideo}>
      <div className="container">
        <div className={scss.detailVideo_title}>
          <h1>Official Videos</h1>
        </div>
        <div className={scss.content}>
          {trailerMovie.length > 0
            ? trailerMovie.map((item, index) => (
                <div key={index} className={scss.video}>
                  <img
                    src={`	https://img.youtube.com/vi/${item.key}/mqdefault.jpg`}
                    alt="video"
                  />
                  <div
                    className={scss.playbtn}
                    onClick={() => openModal(item.key)}
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
                  </div>
                  <p>{item.name}</p>
                </div>
              ))
            : "no official video"}
        </div>
      </div>
      {modalWindow && (
        <div className={scss.modalOpen} onClick={() => setModalWindow(false)}>
          <iframe
            width="951"
            height="535"
            src={`https://www.youtube.com/embed/${videoKey}`}
            title={trailerMovie.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default DetailVideo;
