import React, { useState } from "react";
import CityInput from "./components/CityInput";
import WeatherContainer from "./components/WeatherContainer";
import Footer from "./components/Footer";
import cityList from "./cityList2";
import axios from "axios";
import "./App.css";

function App() {
  const [cityName, setCityName] = useState("");
  // const [weather, setWeather] = useState(null);
  const [weather, setWeather] = useState({
    coord: {
      lon: -84.8,
      lat: 34.17
    },
    weather: [
      {
        id: 804,
        main: "",
        description: "poopy pants",
        icon: "02d"
      }
    ],
    base: "stations",
    main: {
      temp: 284.43,
      feels_like: 280.64,
      temp_min: 281.48,
      temp_max: 286.15,
      pressure: 1014,
      humidity: 70
    },
    visibility: 11265,
    wind: {
      speed: 4.1,
      deg: 290
    },
    clouds: {
      all: 90
    },
    dt: 1582742037,
    sys: {
      type: 1,
      id: 5432,
      country: "US",
      sunrise: 1582719148,
      sunset: 1582759933
    },
    timezone: -18000,
    id: 4186531,
    name: "Cartersville",
    cod: 200
  });
  const apiKey = "14715648d5b5f1ec6117655c97b891de";

  const getTime = () => {
    return new Date().getHours();
  };

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
      .then(res => {
        setWeather(res.data);
        return res;
      });
  };

  return (
    <>
      <CityInput changeHandler={changeHandler} submitHandler={submitHandler} />
      {weather === null ? null : (
        <WeatherContainer weather={weather} userTime={getTime()} />
      )}
      <Footer />
    </>
  );
}

export default App;
