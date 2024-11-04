import React from "react";
import "./Header.css";
import profile from "../../assets/soumya.jpeg";
import { BellIcon } from "../../assets/Icons";
import LogoContainer from "../LogoContainer/LogoContainer";

const Header = ({ toggleNavigation }) => {
  return (
    <div className="header">
      <LogoContainer toggleNavigation={toggleNavigation} />

      <div className="profile-div">
        <div className="notification">
          <BellIcon />
        </div>
        <div className="profile">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
