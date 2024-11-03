import React, { useState } from "react";
import dashboard from "../../assets/sidebar/ViewGridOutline.svg";
import learn from "../../assets/sidebar/LightBulbOutline.svg";
import forums from "../../assets/sidebar/UserGroupOutline.svg";
import upskill from "../../assets/sidebar/ClipboardOutline.svg";
import contest from "../../assets/sidebar/ChartBarOutline.svg";
import leaderboard from "../../assets/sidebar/StarOutline.svg";
import "./Navbar.css";

const menu = [
  { id: 1, title: "Dashboard", icon: dashboard },
  { id: 2, title: "Learn", icon: learn },
  { id: 3, title: "Forums", icon: forums },
  { id: 4, title: "Upskill", icon: upskill },
  { id: 5, title: "Contest", icon: contest },
  { id: 6, title: "Leaderboard", icon: leaderboard },
];

const Navbar = () => {
  return (
    <div className="sidebar">
      {menu.map((menuItem) => (
        <div
          key={menuItem.id}
          className={`menu-item ${menuItem.id === 4 ? "selected" : ""}`}
        >
          <img src={menuItem.icon} alt="icon" />
          <p>{menuItem.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
