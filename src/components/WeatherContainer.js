import React from "react";
import WeatherDescription from "./WeatherDescription";
import IconsContainer from "./IconsContainer";
import Temperature from "./Temperature";
import Greeting from "./Greeting";

const kelvinToFahrenheit = k => {
  return Math.round(((k - 273.15) * 1.8 + 32) * 10) / 10;
};

const kelvinToCelsius = k => {
  return Math.round((k - 273.15) * 10) / 10;
};

const WeatherContainer = props => (
  <>
    <h1 className="courier">CURRENT WEATHER</h1>
    <WeatherDescription description={props.weather.weather[0].description} />
    <IconsContainer />
    <Temperature
      fahrenheit={kelvinToFahrenheit(props.weather.main.temp)}
      celsius={kelvinToCelsius(props.weather.main.temp)}
    />
    <Greeting />
  </>
);

export default WeatherContainer;
