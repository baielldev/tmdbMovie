import Skeleton from "@mui/material/Skeleton";
import scss from "../MoviesCard/MoviesCard.module.scss";

const SkeletonCard = () => {
  return (
    <div className={scss.card_box}>
      <Skeleton
        variant="rounded"
        width={215}
        height={322}
        animation="wave"
        style={{ borderRadius: "15px" }}
      />
      <div className={scss.card_info}>
        <Skeleton
          variant="text"
          width={215}
          height={25}
          animation="wave"
          style={{ borderRadius: "4px" }}
        />
        <Skeleton
          variant="text"
          width={120}
          height={20}
          animation="wave"
          style={{ borderRadius: "4px" }}
        />
      </div>
    </div>
  );
};

export default SkeletonCard;
