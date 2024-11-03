import React from "react";
import SectionTabs from "./SectionTabs/SectionTabs";
import "./Content.css";
import infoIcon from "../../assets/InformationCircleOutline.svg";
import ChapterList from "./Chapters/ChapterList";
import Chapters from "./Chapters/Chapters";

const Content = () => {
  return (
    <>
      <div className="section-header">
        <SectionTabs />
        <div className="how-it-works">
          <img src={infoIcon} alt="infoIcon" />
          How it works
        </div>
      </div>

      <div className="chapter-content">
        <div className="chapter-list-width">
          <ChapterList />
        </div>
        <div className="chapter-content-width">
          <Chapters />
        </div>
      </div>
    </>
  );
};

export default Content;
