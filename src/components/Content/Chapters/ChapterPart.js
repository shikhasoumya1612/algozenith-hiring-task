import React, { useState } from "react";
import Clock from "../../Clock/Clock";

import "./ChapterPart.css";
import {
  CaratDown,
  CaratUp,
  ChartBarOutlineGradient,
  CodeOutline,
  DocumentDuplicateOutline,
  DocumentDuplicateOutlineBlack,
  PlayOutline,
  QuestionMarkCircleOutline,
} from "../../../assets/Icons";

const iconType = {
  QUIZ: <QuestionMarkCircleOutline />,
  CODING: <CodeOutline />,
  VIDEO: <PlayOutline />,
  RESOURCE: <DocumentDuplicateOutlineBlack />,
};

const ChapterPart = ({ part }) => {
  const { id, title, duration, sections, difficulty, completed } = part;
  const [open, setOpen] = useState(part.id === 1);

  const barStyle = {
    background: `linear-gradient(
      90deg,
      #172B4DD9 ${completed}%,
      #EFF5FF ${completed}%
    )`,
    height: "10px",
    margin: "-15px",
    marginBottom: "0px",
    overflow: "hidden",
  };

  return (
    <div className={`chapter-part ${open ? "open" : ""}`}>
      <div className="chapter-part-header-area">
        <div className="chapter-part-header">
          <div>
            <p className="chapter-part-header-partno">PART {id}</p>
            <p className="chapter-part-header-title">{title}</p>
          </div>

          <div className="chapter-part-header-details">
            <div className="chapter-part-header-details-icons">
              <Clock type="GRADIENT" duration={duration} />
              <div className="icon-description">
                <ChartBarOutlineGradient />

                <p>{difficulty}</p>
              </div>
              <div className="icon-description">
                <DocumentDuplicateOutline />

                <p>{part.sections.length}</p>
              </div>
            </div>

            <div
              onClick={() => setOpen((prev) => !prev)}
              className="toggle-button"
            >
              {open ? <CaratUp /> : <CaratDown />}
            </div>
          </div>
        </div>
        <div className="chapter-part-header-completed">
          <p>{completed}% completed</p>
        </div>
        <div style={barStyle}></div>
      </div>

      {open && (
        <div className="chapter-part-section-area">
          {sections.map((section, index) => (
            <div
              className={`chapter-part-section ${
                index !== sections.length - 1 ? "border" : ""
              }`}
              key={section.id}
            >
              <div className="chapter-part-section-title">
                {iconType[section.type]}

                <p>{section.title}</p>
              </div>

              <Clock duration={section.duration} type={"NORMAL"} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChapterPart;
