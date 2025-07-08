import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import scss from "./Rating.module.scss";

const Rating = ({ rating }) => {
  const rounded = rating.toFixed(1);

  const getColor = (value) => {
    if (value > 7) return "#008000";
    if (value >= 4.5) return "#ffa500";
    return "#ff0000";
  };

  return (
    <div className={scss.rating_wrapper}>
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rounded}
        styles={buildStyles({
          pathColor: getColor(rating),
          trailColor: "#fff",
          textColor: "#0c111e",
          textSize: "24px", //
          pathTransitionDuration: 0.5,
          strokeLinecap: "round",
        })}
      />
    </div>
  );
};

export default Rating;
