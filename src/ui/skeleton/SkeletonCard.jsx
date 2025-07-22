import Skeleton from "@mui/material/Skeleton";
import scss from "../MoviesCard/MoviesCard.module.scss";

const SkeletonCard = () => {
  return (
    <div className={scss.card}>
      <div className={scss.card_list}>
        <div className={scss.card_box}>
          <Skeleton
            variant="rounded"
            animation="wave"
            width={215}
            height={322}
            className={scss.imageSkeleton}
            style={{ borderRadius: "15px" }}
          />
          <div className={scss.card_info}>
            <Skeleton
              variant="text"
              animation="wave"
              width={215}
              height={25}
              className={scss.titleSkeleton}
            />
            <Skeleton
              variant="text"
              animation="wave"
              width={100}
              height={20}
              className={scss.textSkeleton}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
