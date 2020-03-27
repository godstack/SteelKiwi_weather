import React from "react";
import "../css/Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        Cloud.<span>24</span>
      </div>
      <div className="header__menu">
        <div className="header__item">Home</div>
        <div className="header__item">Map</div>
        <div className="header__item">News</div>
        <div className="header__item">Contact</div>
        <button className="btn header__btn">Get App</button>
      </div>
    </header>
  );
};
