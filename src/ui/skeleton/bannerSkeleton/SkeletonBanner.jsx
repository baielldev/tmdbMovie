import { Box, Skeleton, Stack } from "@mui/material";
import scss from "../../../components/pages/details/detailsBanner/DetailBanner.module.scss";

const SkeletonBanner = () => {
  return (
    <div className={scss.detailBanner}>
      <Skeleton
        variant="rectangular"
        animation="wave"
        className={scss.backgroundBanner}
        sx={{ height: "100%", position: "absolute", top: 0, left: 0 }}
      />

      <div className="container">
        <div className={scss.content}>
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={350}
            height={525}
            sx={{ borderRadius: "15px", flexShrink: 0 }}
          />

          <div className={scss.content_text}>
            <div className={scss.text_title}>
              <Skeleton variant="text" width="60%" height={40} />
              <Skeleton variant="text" width="40%" height={25} />
            </div>

            <div className={scss.content_action}>
              <Stack direction="row" spacing={4} alignItems="center">
                <Skeleton variant="circular" width={80} height={80} />
                <Skeleton variant="rounded" width={150} height={50} />
              </Stack>
            </div>

            <div className={scss.text_description}>
              <Skeleton variant="text" width="80%" height={30} />
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="95%" />
            </div>

            <div className={scss.text_info}>
              <div className={scss.status}>
                <div className={scss.status_text}>
                  <Skeleton variant="text" width={100} height={25} />
                  <Skeleton variant="text" width={80} height={25} />
                </div>
                <div className={scss.status_text}>
                  <Skeleton variant="text" width={120} height={25} />
                  <Skeleton variant="text" width={100} height={25} />
                </div>
                <div className={scss.status_text}>
                  <Skeleton variant="text" width={80} height={25} />
                  <Skeleton variant="text" width={60} height={25} />
                </div>
              </div>
              <div className={scss.director}>
                <Skeleton variant="text" width={90} height={25} />
                <Skeleton variant="text" width={120} height={25} />
              </div>
              <div className={scss.writter}>
                <Skeleton variant="text" width={90} height={25} />
                <Skeleton variant="text" width={150} height={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonBanner;
