import scss from "./HomeBanner.module.scss";
import Img from "../../ui/LazyLoadImage/Img";
import TextWriteWelcome from "../../ui/TextWriteWelcome/TextWriteWelcome";
import Trending from "../trending/Trending";
import { useState } from "react";
import { useMoviesStore } from "../../store/useMoviesStore";
import { useNavigate } from "react-router-dom";

const HomeBanner = () => {
  const { getSearchMovie } = useMoviesStore();
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const searchBtn = () => {
    if (event.key === "Enter") {
      if (!value.trim()) {
        return alert("Enter your search query.");
      }
      getSearchMovie(value);
      navigate(`/search/${value}`);
    }
  };
  const searchWithBtn = () => {
    if (!value.trim()) {
      return alert("Enter your search query.");
    }
    getSearchMovie(value);
    navigate(`/search/${value}`);
  };

  return (
    <div className={scss.homeBanner}>
      <div className={scss.content}>
        <div className={scss.img}>
          <Img />
          <div className={scss.overlay}></div>
        </div>
        <span className={scss.title}>
          <TextWriteWelcome />
        </span>
        <div className={scss.search}>
          <p>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <div className={scss.input}>
            <input
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="Search for a movie or tv show...."
              onKeyDown={searchBtn}
            />
            <button onClick={searchWithBtn}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
