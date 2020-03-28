import React from 'react';

export default function WeatherIcons(props) {
  return (
    <div>
      {props.icon === '01d' || props.icon === '01n' ? (
        <i className="fad fa-sun fa-4x p-2" />
      ) : (
        <i className="fal fa-sun fa-4x p-2" />
      )}

      {props.icon === '02d' || props.icon === '02n' ? (
        <i className="fad fa-cloud-sun fa-4x p-2" />
      ) : (
        <i className="fal fa-cloud-sun fa-4x p-2" />
      )}

      {props.icon === '03d' ||
      props.icon === '03n' ||
      props.icon === '04d' ||
      props.icon === '04n' ? (
        <i className="fad fa-clouds fa-4x p-2" />
      ) : (
        <i className="fal fa-clouds fa-4x p-2" />
      )}

      {props.icon === '01d' ||
      props.icon === '01n' ||
      props.icon === '02d' ||
      props.icon === '02n' ||
      props.icon === '03d' ||
      props.icon === '03n' ||
      props.icon === '04d' ||
      props.icon === '04n' ? (
        <i className="fal fa-cloud-drizzle fa-4x p-2" />
      ) : null}

      {props.icon === '09d' || props.icon === '09n' ? (
        <i className="fad fa-cloud-drizzle fa-4x p-2" />
      ) : null}

      {props.icon === '10d' || props.icon === '10n' ? (
        <i className="fad fa-cloud-showers-heavy fa-4x p-2" />
      ) : null}

      {props.icon === '11d' || props.icon === '11n' ? (
        <i className="fad fa-thunderstorm fa-4x p-2" />
      ) : null}

      {props.icon === '13d' || props.icon === '13n' ? (
        <i className="fad fa-cloud-snow fa-4x p-2" />
      ) : null}

      {props.icon === '50d' || props.icon === '50n' ? (
        <i className="fad fa-fog fa-4x p-2" />
      ) : null}
    </div>
  );
}
