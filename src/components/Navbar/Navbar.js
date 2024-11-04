import React from "react";
import "./Navbar.css";
import {
  ChartBarOutline,
  ClipboardOutline,
  LightBulbOutline,
  StarOutline,
  UserGroupOutline,
  ViewGridOutline,
} from "../../assets/Icons";

const menu = [
  { id: 1, title: "Dashboard", icon: <ViewGridOutline /> },
  { id: 2, title: "Learn", icon: <LightBulbOutline /> },
  { id: 3, title: "Forums", icon: <UserGroupOutline /> },
  { id: 4, title: "Upskill", icon: <ClipboardOutline /> },
  { id: 5, title: "Contest", icon: <ChartBarOutline /> },
  { id: 6, title: "Leaderboard", icon: <StarOutline /> },
];

const Navbar = () => {
  return (
    <div className="sidebar">
      {menu.map((menuItem) => (
        <div
          key={menuItem.id}
          className={`menu-item ${menuItem.id === 4 ? "selected" : ""}`}
        >
          {menuItem.icon}
          <p>{menuItem.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
