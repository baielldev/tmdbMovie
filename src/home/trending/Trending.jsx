import React, { useEffect } from "react";
import { useMoviesStore } from "../../store/useMoviesStore";
import SwitchTabs from "../../ui/SwitchTabs/SwitchTabs";
import Carousel from "../../ui/Carousel/Carousel";
import scss from "./Trending.module.scss";

const Trending = () => {
  const { getTrending, setTimeWindow, moviesTrending } = useMoviesStore();

  useEffect(() => {
    getTrending();
  }, []);

  const handleTabSelect = (selectedTab) => {
    const timeWindow = selectedTab === "Day" ? "day" : "week";
    setTimeWindow(timeWindow);
    getTrending();
  };

  return (
    <div className={scss.trending}>
      <div className="container">
        <div className={scss.trending_title}>
          <h1>Trending</h1>
          <SwitchTabs btn1="Day" btn2="Week" onSelect={handleTabSelect} />
        </div>
        <div className={scss.content}>
          <Carousel data={moviesTrending} />
        </div>
      </div>
    </div>
  );
};

export default Trending;
