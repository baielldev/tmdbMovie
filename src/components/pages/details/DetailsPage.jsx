import { useEffect } from "react";
import { useMoviesStore } from "../../../store/useMoviesStore";
import { useParams } from "react-router-dom";
import DetailBanner from "./detailsBanner/DetailBanner";
import DetailCast from "./cast/DetailCast";
import DetailVideo from "./videosSection/DetailVideo";
import Similar from "./carousels/similarMovies/Similar";
import Recommendations from "./carousels/recommendationsMovie/Recommendations";

const DetailsPage = () => {
  const { getDetails } = useMoviesStore();
  const { id } = useParams();
  useEffect(() => {
    getDetails(id);
  }, [id]);

  return (
    <div>
      <DetailBanner id={id} />
      <DetailCast id={id} />
      <DetailVideo id={id} />
      <Similar id={id} />
      <Recommendations id={id} />
    </div>
  );
};

export default DetailsPage;
