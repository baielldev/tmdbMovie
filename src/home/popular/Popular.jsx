import { useEffect } from "react";
import scss from "./Popular.module.scss";
import { useMoviesStore } from "../../store/useMoviesStore";
import Carousel from "../../ui/Carousel/Carousel";
import SwitchTabs from "../../ui/SwitchTabs/SwitchTabs";

const Popular = () => {
  const { getPopular, setMediaTypePopular, moviesPopular } = useMoviesStore();

  useEffect(() => {
    getPopular();
  }, []);

  const handleTabSelect = (tab) => {
    const mediaTypePopular = tab === "Movies" ? "movie" : "tv";
    setMediaTypePopular(mediaTypePopular);
    getPopular();
  };

  return (
    <div className={scss.popular}>
      <div className="container">
        <div className={scss.popular_title}>
          <h1>What's Popular</h1>
          <SwitchTabs
            btn1="Movies"
            btn2="TV Shows"
            onSelect={handleTabSelect}
          />
        </div>
        <div className={scss.content}>
          <Carousel data={moviesPopular} />
        </div>
      </div>
    </div>
  );
};

export default Popular;
