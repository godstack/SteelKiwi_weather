import React from "react";
import "../css/KindOfWeather.css";

export const KindOfWeather = () => {
  return (
    <div className="description">
      <p className="description__text description_bold">
        Diffrent kind of weather inside of 24/7 hours.
      </p>
      <p className="description__text">
        Yet too often some very human cultural artifacts really lead the
        business down the certain routes.
      </p>
      <div className="description__search-block">
        <input
          className="my-input description__input"
          type="text"
          placeholder="Search Zip, City, Place"
        />
        <button className="btn description__btn">Get Update</button>
      </div>

      <p className="description__text">Best way to know your city weather.</p>
    </div>
  );
};
