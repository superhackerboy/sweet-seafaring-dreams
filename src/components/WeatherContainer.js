import React from "react";
import WeatherMessage from "./WeatherMessage";
import IconsContainer from "./IconsContainer";
import Temperature from "./Temperature";
import Greeting from "./Greeting";

const WeatherContainer = () => (
  <>
    <h1 className="courier">CURRENT WEATHER</h1>
    <WeatherMessage />
    <IconsContainer />
    <Temperature />
    <Greeting />
  </>
);

export default WeatherContainer;
