import React from "react";
import mentorSessions from "../../../assets/sections/BriefcaseOutline.svg";
import learningMaterial from "../../../assets/sections/CalendarOutline.svg";

import "./SectionTabs.css";

const sections = [
  { id: 1, title: "Mentor Sessions", logo: mentorSessions },
  { id: 2, title: "Learning Material", logo: learningMaterial },
];

const SectionTabs = () => {
  return (
    <div className="sections">
      {sections.map((section) => (
        <div
          className={`section-tab ${section.id === 2 ? "selected" : ""}`}
          key={section.id}
        >
          <img src={section.logo} alt="section" />
          <div>{section.title}</div>
        </div>
      ))}
    </div>
  );
};

export default SectionTabs;
