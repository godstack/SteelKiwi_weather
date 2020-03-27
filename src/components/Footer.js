import React from "react";
import "../css/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__text">
        Copyright © 2011-2019 | Created by <span>Umanets Oleksii</span>
      </div>

      <div className="footer__icons">
        <div className="footer__facebook-icon footer__icons-style" />
        <div className="footer__twitter-icon footer__icons-style" />
        <div className="footer__dribble-icon footer__icons-style" />
        <div className="footer__instagram-icon footer__icons-style" />
        <div className="footer__in-icon footer__icons-style" />
      </div>
    </div>
  );
};
