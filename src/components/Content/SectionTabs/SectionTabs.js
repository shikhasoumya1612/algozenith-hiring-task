import React from "react";
import "./SectionTabs.css";
import { BriefcaseOutline, CalendarOutline } from "../../../assets/Icons";

const sections = [
  { id: 1, title: "Mentor Sessions", logo: <BriefcaseOutline /> },
  { id: 2, title: "Learning Material", logo: <CalendarOutline /> },
];

const SectionTabs = () => {
  return (
    <div className="sections">
      {sections.map((section) => (
        <div
          className={`section-tab ${section.id === 2 ? "selected" : ""}`}
          key={section.id}
        >
          {section.logo}
          <div>{section.title}</div>
        </div>
      ))}
    </div>
  );
};

export default SectionTabs;
