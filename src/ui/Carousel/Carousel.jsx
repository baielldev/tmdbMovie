import scss from "./Carousel.module.scss";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import MoviesCard from "../MoviesCard/MoviesCard";
import Rating from "../rating/Rating";
import { useRef, useState } from "react";
import { useMoviesStore } from "../../store/useMoviesStore";
import SkeletonCard from "../skeleton/SkeletonCard";

const Carousel = ({ data }) => {
  const { loader } = useMoviesStore();
  setTimeout(() => {
    loader;
  }, 2000);
  const carouselRef = useRef();
  const [show, setShow] = useState(0);

  const scroll = (value) => {
    const container = carouselRef.current;
    const amount =
      value === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);
    container.scrollTo({ left: amount, behavior: "smooth" });
    setShow(amount);
    console.log(amount);
  };
  return (
    <div className={scss.carousel}>
      <div className={scss.carouselItem}>
        {show < 3000 ? (
          <FaCircleArrowRight
            onClick={() => scroll("right")}
            className={`${scss.arrow} ${scss.iconRight}`}
          />
        ) : (
          ""
        )}

        {show > 0 ? (
          <FaCircleArrowLeft
            onClick={() => scroll("left")}
            className={`${scss.arrow} ${scss.iconLeft}`}
          />
        ) : (
          ""
        )}

        <div ref={carouselRef} className={scss.list}>
          {loader
            ? Array(6)
                .fill(0)
                .map((_, index) => <SkeletonCard key={index} />)
            : data?.map((item, index) => (
                <div key={index}>
                  <MoviesCard item={item} />
                  <Rating rating={item.vote_average} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
