import { useEffect, useState } from "react";
import scss from "./TvShowPage.module.scss";
import { Select } from "antd";
import { useMoviesStore } from "../../../store/useMoviesStore";
import { Link } from "react-router-dom";
import notImg from "../../../assets/Снимок экрана 2025-06-21 в 15.28.03.png";

const OPTIONS = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science fiction",
  "TV Movie",
  "Thriller",
  "War",
  "Western",
];

const OPTIONS_SORT = [
  "Popularity Descending",
  "Popularity Ascending",
  "Rating Descending",
  "Rating Ascending",
  "Release Date Descending",
  "Release Date Ascending",
  "Title (A-Z)",
];

const TvShowPage = () => {
  const { getTvShowsPage, tvShowsPage } = useMoviesStore();
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemsSort, setSelectedItemsSort] = useState([]);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
  const filteredOptionsSort = OPTIONS_SORT.filter(
    (o) => !selectedItemsSort.includes(o)
  );

  console.log(tvShowsPage);

  useEffect(() => {
    getTvShowsPage();
  }, []);
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
              value={selectedItems}
              onChange={setSelectedItems}
              style={{ width: "250px" }}
              options={filteredOptions.map((item) => ({
                value: item,
                label: item,
              }))}
            />
            <Select
              className={scss.selectSort}
              mode="multiple"
              placeholder="Sort by.."
              value={selectedItemsSort}
              onChange={setSelectedItemsSort}
              style={{ width: "250px" }}
              options={filteredOptionsSort.map((item) => ({
                value: item,
                label: item,
              }))}
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
                  alt={`${item.title} poster`}
                />
              </Link>
              <div className={scss.card_info}>
                <h1 className={scss.movieTitle}>
                  {item.title ? item.title : item.original_name}
                </h1>
                <p>
                  {item.release_date ? item.release_date : item.first_air_date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvShowPage;
