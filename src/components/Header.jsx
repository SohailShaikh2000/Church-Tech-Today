import React from "react";
import "../styles/Header.scss";
import Logo from "../assets/logo.png";
import Logo1 from "../assets/download.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logo1">
          <img src={Logo} alt="" />
          <p>
            Church Tech <br /> Today
          </p>
        </div>
        <h1>AI Pulse Check</h1>
        <div className="logo2">
          <img src={Logo1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
