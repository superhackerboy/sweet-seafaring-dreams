import React, { useState } from "react";
import CityInput from "./components/CityInput";
import cityList from "./cityList2";
import "./App.css";

function App() {
  const [cityName, setCityName] = useState("");
  // const [cityCode, setCityCode] = useState(0);
  const apiKey = "14715648d5b5f1ec6117655c97b891de";

  const changeHandler = e => {
    setCityName(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    const result = cityList.find(
      city => city.name.toLowerCase() === cityName.toLowerCase()
    );

    fetch(
      "api.openweathermap.org/data/2.5/forecast?id=" +
        result.id +
        "&appid=" +
        apiKey
    )
      .then(res => res.json())
      .then(weather => console.log(weather));
  };

  return (
    <>
      <CityInput changeHandler={changeHandler} submitHandler={submitHandler} />
    </>
  );
}

export default App;
