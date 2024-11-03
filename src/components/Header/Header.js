import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import hamburger from "../../assets/hamburger.svg";
import bellIcon from "../../assets/bell-icon.svg";
import profile from "../../assets/soumya.jpeg";

const Header = ({ toggleNavigation }) => {
  return (
    <div className="header">
      <div className="logo-div">
        <img
          src={hamburger}
          alt="hamburger"
          onClick={toggleNavigation}
          className="hamburger"
        />
        <img src={logo} alt="logo" />
      </div>

      <div className="profile-div">
        <div className="notification">
          <img src={bellIcon} alt="bell-icon" />
        </div>
        <div className="profile">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
