import React, { useEffect } from "react";
import scss from "./TopRated.module.scss";
import { useMoviesStore } from "../../store/useMoviesStore";
import SwitchTabs from "../../ui/SwitchTabs/SwitchTabs";
import Carousel from "../../ui/Carousel/Carousel";

const TopRated = () => {
  const { getTopRated, setMediaTypeTopRated, moviesTopRated } =
    useMoviesStore();

  useEffect(() => {
    getTopRated();
  }, []);

  const handleTabSelect = (selectedTab) => {
    const mediaTypeTopRated = selectedTab === "Movies" ? "movie" : "tv";
    setMediaTypeTopRated(mediaTypeTopRated);
    getTopRated();
  };

  return (
    <div className={scss.topRated}>
      <div className="container">
        <div className={scss.topRated_title}>
          <h1>Top Rated</h1>
          <SwitchTabs
            btn1="Movies"
            btn2="TV Shows"
            onSelect={handleTabSelect}
          />
        </div>
        <div className={scss.content}>
          <Carousel data={moviesTopRated} />
        </div>
      </div>
    </div>
  );
};

export default TopRated;
