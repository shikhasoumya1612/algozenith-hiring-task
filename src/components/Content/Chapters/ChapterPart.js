import React, { useState } from "react";
import Clock from "../../Clock/Clock";
import gradientChart from "../../../assets/ChartBarOutline.svg";
import sectionIcon from "../../../assets/DocumentDuplicateOutline.svg";
import downArrow from "../../../assets/CaratDown.svg";
import upArrow from "../../../assets/CaratUp.svg";
import coding from "../../../assets/resource-type/CodeOutline.svg";
import quiz from "../../../assets/resource-type/QuestionMarkCircleOutline.svg";
import video from "../../../assets/resource-type/PlayOutline.svg";
import document from "../../../assets/resource-type/DocumentDuplicateOutline-black.svg";

import "./ChapterPart.css";

const iconType = {
  QUIZ: quiz,
  CODING: coding,
  VIDEO: video,
  RESOURCE: document,
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
            <Clock type="GRADIENT" duration={duration} />

            <div className="icon-description">
              <img
                src={gradientChart}
                alt="difficulty"
                width={"36px"}
                height={"36px"}
              />

              <p>{difficulty}</p>
            </div>

            <div className="icon-description">
              <img
                src={sectionIcon}
                alt="sections"
                width={"36px"}
                height={"36px"}
              />

              <p>{part.sections.length}</p>
            </div>

            <img
              src={open ? upArrow : downArrow}
              alt="open"
              onClick={() => setOpen((prev) => !prev)}
              className="toggle-button"
            />
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
                <img
                  src={iconType[section.type]}
                  alt="section-icon"
                  width="32px"
                  height="32px"
                />
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
