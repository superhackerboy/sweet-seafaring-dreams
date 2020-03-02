import React from "react";

const IconsContainer = props => (
  <div className="flex justify-center mb-4">
    {props.apiIcon === "01n" ? (
      <i class="fad fa-moon-stars fa-4x p-2" />
    ) : props.apiIcon === "01d" ? (
      <i className="fad fa-sun fa-4x p-2" />
    ) : (
      <i className="fal fa-sun fa-4x p-2" />
    )}

    {props.apiIcon === "02n" ? (
      <i class="fad fa-clouds-moon fa-4x p-2" />
    ) : props.apiIcon === "02d" ? (
      <i class="fad fa-cloud-sun fa-4x p-2" />
    ) : (
      <i class="fal fa-cloud-sun fa-4x p-2" />
    )}

    {props.apiIcon === "03d" ||
    props.apiIcon === "03n" ||
    props.apiIcon === "04d" ||
    props.apiIcon === "04n" ? (
      <i className="fad fa-clouds fa-4x p-2" />
    ) : (
      <i className="fal fa-clouds fa-4x p-2" />
    )}

    {props.apiIcon === "01d" ||
    props.apiIcon === "01n" ||
    props.apiIcon === "02d" ||
    props.apiIcon === "02n" ||
    props.apiIcon === "03d" ||
    props.apiIcon === "04d" ||
    props.apiIcon === "04d" ||
    props.apiIcon === "03n" ? (
      <i className="fal fa-cloud-drizzle fa-4x p-2" />
    ) : null}

    {props.apiIcon === "09d" || props.apiIcon === "09n" ? (
      <i className="fad fa-cloud-drizzle fa-4x p-2" />
    ) : null}

    {props.apiIcon === "10d" || props.apiIcon === "10n" ? (
      <i className="fad fa-cloud-showers-heavy fa-4x p-2" />
    ) : null}

    {props.apiIcon === "11d" || props.apiIcon === "11n" ? (
      <i className="fad fa-thunderstorm fa-4x p-2" />
    ) : null}

    {props.apiIcon === "13d" || props.apiIcon === "13n" ? (
      <i className="fad fa-cloud-snow fa-4x p-2" />
    ) : null}

    {props.apiIcon === "50d" || props.apiIcon === "50n" ? (
      <i className="fad fa-fog fa-4x p-2" />
    ) : null}
  </div>
);

export default IconsContainer;
