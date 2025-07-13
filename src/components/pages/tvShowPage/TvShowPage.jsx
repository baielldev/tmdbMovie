import { useEffect, useState } from "react";
import scss from "./TvShowPage.module.scss";
import { Select } from "antd";
import { useMoviesStore } from "../../../store/useMoviesStore";
import { Link } from "react-router-dom";
import notImg from "../../../assets/Снимок экрана 2025-06-21 в 15.28.03.png";

const OPTIONS_SORT = [
  { label: "Popularity Descending", value: "popularity.desc" },
  { label: "Popularity Ascending", value: "popularity.asc" },
  { label: "Rating Descending", value: "vote_average.desc" },
  { label: "Rating Ascending", value: "vote_average.asc" },
  { label: "Release Date Descending", value: "first_air_date.desc" },
  { label: "Release Date Ascending", value: "first_air_date.asc" },
  { label: "Title (A-Z)", value: "original_name.asc" },
];

const TvShowPage = () => {
  const { getTvShowsPage, tvShowsPage, genresTv, getGenresTv } =
    useMoviesStore();

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedSort, setSelectedSort] = useState("popularity.desc");

  const filteredGenres = genresTv.filter((g) => !selectedGenres.includes(g.id));

  useEffect(() => {
    getGenresTv();
    getTvShowsPage([], "popularity.desc");
  }, []);

  useEffect(() => {
    getTvShowsPage(selectedGenres, selectedSort);
  }, [selectedGenres, selectedSort]);

  return (
    <div className={scss.tvShow}>
      <div className="container">
        <div className={scss.tvShowTitle}>
          <h1>Explore TV Shows</h1>
          <div className={scss.selects}>
            <Select
              className={scss.selectGenres}
              mode="multiple"
              placeholder="Select genres"
              value={selectedGenres}
              onChange={setSelectedGenres}
              style={{ width: "250px" }}
              options={filteredGenres.map((item) => ({
                value: item.id,
                label: item.name,
              }))}
            />
            <Select
              className={scss.selectSort}
              placeholder="Sort by..."
              value={selectedSort}
              onChange={setSelectedSort}
              style={{ width: "250px" }}
              options={OPTIONS_SORT}
            />
          </div>
        </div>
        <div className={scss.content}>
          {tvShowsPage.map((item, index) => (
            <div key={index} className={scss.movies_card}>
              <Link to={`/tv/${item.id}`}>
                <img
                  src={
                    item.poster_path
                      ? `https://media.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`
                      : notImg
                  }
                  alt={item.name}
                />
              </Link>
              <div className={scss.card_info}>
                <h1 className={scss.movieTitle}>
                  {item.name || item.original_name}
                </h1>
                <p>{item.first_air_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvShowPage;
