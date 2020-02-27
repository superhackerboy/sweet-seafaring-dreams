import React from "react";
import ActiveWeatherIcon from "./ActiveWeatherIcon";
import WeatherIcon from "./WeatherIcon";

const IconsContainer = props => (
  <>
    {props.description === "clear sky" ? (
      <ActiveWeatherIcon icon={<i class="fas fa-sun fa-5x" value="clear" />} />
    ) : (
      <WeatherIcon icon={<i className="fal fa-sun fa-5x" value="clear" />} />
    )}

    {props.description === "few clouds" ||
    props.description === "scattered clouds" ||
    props.description === "broken clouds" ? (
      <ActiveWeatherIcon
        icon={
          <i
            class="fas fa-cloud-sun fa-5x fa-flip-horizontal"
            value="partly cloudy"
          />
        }
      />
    ) : (
      <WeatherIcon
        icon={
          <i
            className="fal fa-cloud-sun fa-5x fa-flip-horizontal"
            value="partly cloudy"
          />
        }
      />
    )}

    {props.description === "overcast clouds" ? (
      <ActiveWeatherIcon
        icon={<i class="fas fa-cloud fa-5x" value="cloudy" />}
      />
    ) : (
      <WeatherIcon icon={<i className="fal fa-cloud fa-5x" value="cloudy" />} />
    )}
  </>
);

export default IconsContainer;
