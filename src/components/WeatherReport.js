import React, { useState, useEffect } from "react";
import "../css/WeatherReport.css";

export const WeatherReport = () => {
  const [data, setData] = useState({});
  const date = new Date();

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Vinnytsia&APPID=1566ea835f2a844b67d0aae752f12820"
    )
      .then(res => res.json())
      .then(weather => {
        console.log(weather);
        setData(weather);
      });
  }, []);

  return (
    <div className="weather-wrapper">
      {data && (
        <div className="weather-report">
          <div className="title">
            <div className="title__icon" />
            <p className="title__paragraph-1">WEATHER REPORT</p>
            <p className="title__paragraph-2">
              {date.toDateString()}, {data.name}, {data.sys && data.sys.country}
            </p>
          </div>
          <div className="temperature">
            <div className="temperature__icon" />
            <p className="temperature__paragraph-1">
              {data.main && (data.main.temp - 273.15).toFixed(1)} °
            </p>
            <p className="temperature__paragraph-2">
              {data.weather && data.weather[0].description}
            </p>
          </div>
          <div className="details">
            <div className="details__icon-cloud details__content details_icon-setting">
              <span>{data.wind && data.wind.speed}</span>mm/h
            </div>
            <div className="details__icon-snowflake details_icon-setting">
              <span>{data.wind && data.wind.speed}</span>mph
            </div>
            <div className="details__icon-wind details_icon-setting">
              <span>{data.wind && data.wind.speed}</span>m/s
            </div>
            <div className="details__description">
              <span>Today’s Weather Forecast</span>Yet too often some very human
              cultural artifacts really lead the business down the certain
              routes. Data should underlie every business decision.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
