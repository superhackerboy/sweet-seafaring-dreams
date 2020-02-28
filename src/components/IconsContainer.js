import React from "react";
import WeatherIcon from "./WeatherIcon";

// TODO: night icons

const IconsContainer = props => (
  <div className="flex justify-center">
    {props.apiIcon === "01d" ? (
      <WeatherIcon icon={<i class="fad fa-sun fa-4x" />} />
    ) : (
      <WeatherIcon icon={<i className="fal fa-sun fa-4x" />} />
    )}

    {props.apiIcon === "02d" ? (
      <WeatherIcon
        icon={<i className="fad fa-cloud-sun fa-4x fa-flip-horizontal" />}
      />
    ) : (
      <WeatherIcon
        icon={<i className="fal fa-cloud-sun fa-4x fa-flip-horizontal" />}
      />
    )}

    {props.apiIcon === "03d" || props.apiIcon === "04d" ? (
      <WeatherIcon icon={<i class="fad fa-clouds fa-4x" />} />
    ) : (
      <WeatherIcon icon={<i class="fal fa-clouds fa-4x" />} />
    )}

    {props.apiIcon === "01d" ||
    props.apiIcon === "02d" ||
    props.apiIcon === "03d" ? (
      <WeatherIcon icon={<i class="fal fa-cloud-drizzle fa-4x" />} />
    ) : null}

    {props.apiIcon === "09d" ? (
      <WeatherIcon icon={<i class="fad fa-cloud-drizzle fa-4x" />} />
    ) : null}

    {props.apiIcon === "10d" ? (
      <WeatherIcon icon={<i class="fad fa-cloud-showers-heavy fa-4x" />} />
    ) : null}

    {props.apiIcon === "11d" ? (
      <WeatherIcon icon={<i class="fad fa-thunderstorm fa-4x" />} />
    ) : null}

    {props.apiIcon === "13d" ? (
      <WeatherIcon icon={<i class="fad fa-cloud-snow fa-4x" />} />
    ) : null}

    {props.apiIcon === "50d" ? (
      <WeatherIcon icon={<i class="fad fa-fog fa-4x" />} />
    ) : null}
  </div>
);

export default IconsContainer;
