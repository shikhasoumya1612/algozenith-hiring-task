import React from "react";
import "./ChapterList.css";
import Clock from "../../Clock/Clock";

const ChapterList = () => {
  const chapters = [
    { id: 1, duration: 910 },
    { id: 2, duration: 551 },
    { id: 3, duration: 839 },
    { id: 4, duration: 889 },
    { id: 5, duration: 234 },
  ];
  return (
    <div className="chapters">
      {chapters.map((chapter) => (
        <div key={chapter.id}>
          <div className={`chapter ${chapter.id === 1 ? "selected" : ""}`}>
            <div className="chapter-text">Chapter{" " + chapter.id}</div>

            {chapter.id === 1 && (
              <div className="time">
                <Clock duration={chapter.duration} type={"BLUE"} />
              </div>
            )}
          </div>

          <div
            className={`condensed-chapter ${
              chapter.id === 1 ? "selected" : ""
            }`}
          >
            {chapter.id}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChapterList;
