import React from "react";
import "./Clock.css";
import {
  ClockOutline,
  ClockOutlineBlue,
  ClockOutlineGradient,
} from "../../assets/Icons";

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
    NORMAL: <ClockOutline />,
    GRADIENT: <ClockOutlineGradient />,
    BLUE: <ClockOutlineBlue />,
  };

  return (
    <div className="clock">
      {icon[type] || <></>}
      <div>{formatDuration(duration)}</div>
    </div>
  );
};

export default Clock;
