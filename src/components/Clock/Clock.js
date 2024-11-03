import React from "react";
import clockBlue from "../../assets/ClockOutline-Blue.svg";
import clockNormal from "../../assets/ClockOutline.svg";
import clockGradient from "../../assets/ClockOutline-Gradient.svg";
import "./Clock.css";

function formatDuration(minutes) {
  const totalSeconds = minutes * 60;
  const hours = Math.floor(totalSeconds / 3600);
  const minutesLeft = Math.floor((totalSeconds % 3600) / 60);
  const secondsLeft = totalSeconds % 60;

  if (hours > 0) {
    return `${String(hours).padStart(2, "0")}:${String(minutesLeft).padStart(
      2,
      "0"
    )}:${String(secondsLeft).padStart(2, "0")}`;
  } else {
    return `${String(minutesLeft).padStart(2, "0")}:${String(
      secondsLeft
    ).padStart(2, "0")}`;
  }
}

const Clock = ({ duration, type }) => {
  const icon = {
    NORMAL: clockNormal,
    GRADIENT: clockGradient,
    BLUE: clockBlue,
  };

  return (
    <div className="clock">
      <img src={icon[type]} alt="clock" />
      <div>{formatDuration(duration)}</div>
    </div>
  );
};

export default Clock;
