import React from "react";
import { Header } from "../components/Header";
import "../css/FirstPage.css";
import { KindOfWeather } from "../components/KindOfWeather";
import { WeatherReport } from "../components/WeatherReport";

export const FirstPage = () => {
  return (
    <div className="first-page">
      <Header />
      <div className="first-page__content">
        <KindOfWeather />
        <WeatherReport />
      </div>
    </div>
  );
};
