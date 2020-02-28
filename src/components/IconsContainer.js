import React from "react";
import WeatherIcon from "./WeatherIcon";

// TODO: night icons

const IconsContainer = props => (
  <>
    {props.apiIcon === "01d" ? (
      <WeatherIcon
        icon={<i class="fad fa-sun fa-5x" />}
        checkbox={<i class="fad fa-check-square" />}
      />
    ) : (
      <WeatherIcon
        icon={<i className="fal fa-sun fa-5x" />}
        checkbox={<i class="fal fa-square" />}
      />
    )}

    {props.apiIcon === "02d" ? (
      <WeatherIcon
        icon={<i className="fad fa-cloud-sun fa-5x fa-flip-horizontal" />}
        checkbox={<i class="fad fa-check-square" />}
      />
    ) : (
      <WeatherIcon
        icon={<i className="fal fa-cloud-sun fa-5x fa-flip-horizontal" />}
        checkbox={<i class="fal fa-square" />}
      />
    )}

    {props.apiIcon === "03d" || props.apiIcon === "04d" ? (
      <WeatherIcon
        icon={<i class="fad fa-clouds fa-5x" />}
        checkbox={<i class="fad fa-check-square" />}
      />
    ) : (
      <WeatherIcon
        icon={<i class="fal fa-clouds fa-5x" />}
        checkbox={<i class="fal fa-square" />}
      />
    )}

    {props.apiIcon === "01d" ||
    props.apiIcon === "02d" ||
    props.apiIcon === "03d" ? (
      <WeatherIcon
        icon={<i class="fal fa-cloud-drizzle fa-5x" />}
        checkbox={<i class="fal fa-square" />}
      />
    ) : null}

    {props.apiIcon === "09d" ? (
      <WeatherIcon
        icon={<i class="fad fa-cloud-drizzle fa-5x" />}
        checkbox={<i class="fad fa-check-square" />}
      />
    ) : null}

    {props.apiIcon === "10d" ? (
      <WeatherIcon
        icon={<i class="fad fa-cloud-showers-heavy fa-5x" />}
        checkbox={<i class="fad fa-check-square" />}
      />
    ) : null}

    {props.apiIcon === "11d" ? (
      <WeatherIcon
        icon={<i class="fad fa-thunderstorm fa-5x" />}
        checkbox={<i class="fad fa-check-square" />}
      />
    ) : null}

    {props.apiIcon === "13d" ? (
      <WeatherIcon
        icon={<i class="fad fa-cloud-snow fa-5x" />}
        checkbox={<i class="fad fa-check-square" />}
      />
    ) : null}

    {props.apiIcon === "50d" ? (
      <WeatherIcon
        icon={<i class="fad fa-fog fa-5x" />}
        checkbox={<i class="fad fa-check-square" />}
      />
    ) : null}
  </>
);

export default IconsContainer;
