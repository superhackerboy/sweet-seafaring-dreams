import React from 'react';
import Location from './Location';
import WeatherIcons from './WeatherIcons';
import WeatherDescription from './WeatherDescription';
import Temperature from './Temperature';
import Greeting from './Greeting.js';

const kelvinToFahrenheit = k => {
  return Math.round(((k - 273.15) * 1.8 + 32) * 10) / 10;
};

const kelvinToCelsius = k => {
  return Math.round((k - 273.15) * 10) / 10;
};

const WeatherContainer = props => {
  return (
    <>
      <Location location={props.location} />

      <WeatherIcons icon={props.weather.weather[0].icon} />

      <WeatherDescription description={props.weather.weather[0].description} />

      <Temperature
        fahrenheit={kelvinToFahrenheit(props.weather.main.temp)}
        celsius={kelvinToCelsius(props.weather.main.temp)}
      />

      {props.userTime >= 18 || props.userTime <= 4 ? (
        <Greeting message="good night and sweet seafaring dreams" />
      ) : (
        <Greeting />
      )}
    </>
  );
};

export default WeatherContainer;
