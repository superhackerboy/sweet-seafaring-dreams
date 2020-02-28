import React from "react";
import ActiveWeatherIcon from "./ActiveWeatherIcon";
import WeatherIcon from "./WeatherIcon";

// TODO: night icons

const IconsContainer = props => (
  <>
    {props.apiIcon === "01d" ? (
      <ActiveWeatherIcon icon={<i class="fad fa-sun fa-5x" />} />
    ) : (
      <WeatherIcon icon={<i className="fal fa-sun fa-5x" />} />
    )}
    {props.apiIcon === "02d" ? (
      <ActiveWeatherIcon
        icon={<i className="fad fa-cloud-sun fa-5x fa-flip-horizontal" />}
      />
    ) : (
      <WeatherIcon
        icon={<i className="fal fa-cloud-sun fa-5x fa-flip-horizontal" />}
      />
    )}
    {props.apiIcon === "03d" || props.apiIcon === "04d" ? (
      <ActiveWeatherIcon icon={<i class="fad fa-clouds fa-5x" />} />
    ) : (
      <ActiveWeatherIcon icon={<i class="fal fa-clouds fa-5x" />} />
    )}

    {props.apiIcon === "01d" ||
    props.apiIcon === "02d" ||
    props.apiIcon === "03d" ? (
      <ActiveWeatherIcon icon={<i class="fal fa-cloud-drizzle fa-5x" />} />
    ) : null}
    {props.apiIcon === "09d" ? (
      <ActiveWeatherIcon icon={<i class="fad fa-cloud-drizzle fa-5x" />} />
    ) : null}
    {props.apiIcon === "10d" ? (
      <ActiveWeatherIcon
        icon={<i class="fad fa-cloud-showers-heavy fa-5x" />}
      />
    ) : null}
    {props.apiIcon === "11d" ? (
      <ActiveWeatherIcon icon={<i class="fad fa-thunderstorm fa-5x" />} />
    ) : null}
    {props.apiIcon === "13d" ? (
      <ActiveWeatherIcon icon={<i class="fad fa-cloud-snow fa-5x" />} />
    ) : null}
    {props.apiIcon === "50d" ? (
      <ActiveWeatherIcon icon={<i class="fad fa-fog fa-5x" />} />
    ) : null}
  </>
);

export default IconsContainer;
