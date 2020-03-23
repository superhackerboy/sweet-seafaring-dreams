import React from 'react';
import WeatherDescription from './WeatherDescription';
import WeatherIcons from './WeatherIcons';
import Temperature from './Temperature';

const kelvinToFahrenheit = k => {
  return Math.round(((k - 273.15) * 1.8 + 32) * 10) / 10;
};

const kelvinToCelsius = k => {
  return Math.round((k - 273.15) * 10) / 10;
};

const WeatherContainer = props => {
  return (
    <>
      <Temperature
        fahrenheit={kelvinToFahrenheit(props.weather.main.temp)}
        celsius={kelvinToCelsius(props.weather.main.temp)}
      />
    </>
  );
};

export default WeatherContainer;
