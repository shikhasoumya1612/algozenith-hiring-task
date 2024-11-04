import React from "react";
import { Hamburger, Logo } from "../../assets/Icons";
import "../Header/Header.css";

const LogoContainer = ({ toggleNavigation }) => {
  return (
    <div className="logo-div">
      <div className="hamburger" onClick={toggleNavigation}>
        <Hamburger />
      </div>
      <div className="logo">
        <Logo />
      </div>
    </div>
  );
};

export default LogoContainer;
