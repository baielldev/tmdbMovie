import { Select } from "antd";
import { useMoviesStore } from "../../../store/useMoviesStore";
import scss from "./MoviesPage.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

const MoviesPage = () => {
  const { moviesPage, getMoviesPage } = useMoviesStore();
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemsSort, setSelectedItemsSort] = useState([]);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
  const filteredOptionsSort = OPTIONS_SORT.filter(
    (o) => !selectedItemsSort.includes(o)
  );

  useEffect(() => {
    getMoviesPage();
  }, [selectedItems]);
  console.log(moviesPage);

  return (
    <div className={scss.moviesPage}>
      <div className="container">
        <div className={scss.moviesTitle}>
          <h1>Explore Movies</h1>
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
          {moviesPage.map((item, index) => (
            <div key={index} className={scss.movies_card}>
              <Link to={`/movie/${item.id}`}>
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

export default MoviesPage;
