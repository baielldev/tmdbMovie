import { Select } from "antd";
import { useMoviesStore } from "../../../store/useMoviesStore";
import scss from "./MoviesPage.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import notImg from "../../../assets/Снимок экрана 2025-06-21 в 15.28.03.png";

const OPTIONS_SORT = [
  { label: "Popularity Descending", value: "popularity.desc" },
  { label: "Popularity Ascending", value: "popularity.asc" },
  { label: "Rating Descending", value: "vote_average.desc" },
  { label: "Rating Ascending", value: "vote_average.asc" },
  { label: "Release Date Descending", value: "release_date.desc" },
  { label: "Release Date Ascending", value: "release_date.asc" },
  { label: "Title (A-Z)", value: "original_title.asc" },
];

const MoviesPage = () => {
  const { moviesPage, getMoviesPage, getGenresMovie, genresMovie } =
    useMoviesStore();
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemsSort, setSelectedItemsSort] = useState("popularity.desc");

  const filteredOptions = genresMovie.filter(
    (genre) => !selectedItems.includes(genre.id)
  );

  useEffect(() => {
    getGenresMovie();
  }, []);

  useEffect(() => {
    getMoviesPage(selectedItems, selectedItemsSort);
  }, [selectedItems, selectedItemsSort]);

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
              onChange={(values) => {
                setSelectedItems(values);
              }}
              style={{ width: "250px" }}
              options={filteredOptions.map((item) => ({
                value: item.id,
                label: item.name,
              }))}
            />
            <Select
              className={scss.selectSort}
              placeholder="Sort by..."
              value={selectedItemsSort}
              onChange={(value) => {
                setSelectedItemsSort(value);
              }}
              style={{ width: "250px" }}
              options={OPTIONS_SORT}
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
