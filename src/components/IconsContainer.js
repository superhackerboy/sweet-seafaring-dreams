import React from "react";
import WeatherIcon from "./WeatherIcon";

const IconsContainer = () => (
  <>
    <WeatherIcon icon={<i className="fal fa-sun fa-5x" />} />
    <WeatherIcon
      icon={<i className="fal fa-cloud-sun fa-5x fa-flip-horizontal" />}
    />
    <WeatherIcon icon={<i className="fal fa-cloud fa-5x" />} />
  </>
);

export default IconsContainer;
