import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.scss";

const CircleRating = ({ rating }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const diff = rating - prevProgress;
        const step = diff > 0 ? 1 : 0;
        if (prevProgress === rating) {
          clearInterval(timer);
        }
        return prevProgress + step;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [rating]);

  return (
    <div className="circleRating">
      <CircularProgressbar
        value={progress}
        maxValue={10}
        text={progress}
        styles={buildStyles({
          pathColor:
            progress < 5 ? "red" : progress < 7 ? "orange" : "green"
        })}
      />
    </div>
  );
};

export default CircleRating;
