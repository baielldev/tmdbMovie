import scss from "./Skeleton.module.scss";
import Skeleton from "@mui/material/Skeleton";
const SkeletonCard = () => {
  return (
    <div className={scss.skeletonWrapper}>
      <Skeleton
        variant="rounded"
        width={215}
        height={322}
        animation="wave"
        style={{ borderRadius: "15px" }}
      />
      <Skeleton
        className={scss.ratingSkeleton}
        variant="rounded"
        width={51}
        height={51}
        animation="wave"
        style={{ borderRadius: "50%" }}
      />
      <Skeleton
        className={scss.title}
        variant="rounded"
        width={215}
        height={20}
        animation="wave"
      />
      <Skeleton variant="rounded" width={100} height={20} animation="wave" />
    </div>
  );
};

export default SkeletonCard;
