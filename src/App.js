import React, { useState } from "react";
import CityInput from "./components/CityInput";
import WeatherContainer from "./components/WeatherContainer";
import cityList from "./cityList2";
import axios from "axios";
import "./App.css";

function App() {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState([]);
  const apiKey = "14715648d5b5f1ec6117655c97b891de";

  const changeHandler = e => {
    setCityName(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    const result = cityList.find(
      // gets city code from citList.json
      city => city.name.toLowerCase() === cityName.toLowerCase()
    );

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?id=${result.id}&appid=${apiKey}`
      )
      .then(res => setWeather(res.data));
  };

  return (
    <>
      <CityInput changeHandler={changeHandler} submitHandler={submitHandler} />
      <WeatherContainer />
    </>
  );
}

export default App;
