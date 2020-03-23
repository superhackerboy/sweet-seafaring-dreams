import React, { useState, useEffect, useRef } from 'react';
import CityInput from './components/CityInput';
import WeatherContainer from './components/WeatherContainer';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [address, setAddress] = useState('');
  const [geolocation, setGeolocation] = useState([]);
  const [weather, setWeather] = useState(null);
  const didMount = useRef(true);

  useEffect(() => {
    if (didMount.current) {
      didMount.current = false;
    } else {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${geolocation[1]}&lon=${geolocation[0]}&appid=14715648d5b5f1ec6117655c97b891de`;

      fetch(url)
        .then(res => res.json())
        .then(data => {
          setWeather(data.list[1]);
        });
    }
  }, [geolocation]);

  const changeHandler = e => {
    setAddress(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      address
    )}.json?access_token=pk.eyJ1Ijoic3VwZXJoYWNrZXJtYW4iLCJhIjoiY2s3a3J3eTZqMDA1bTNscG1sdTA3eTJmayJ9.P-J5RMF_i4GyThSIYhoVFg&limit=1`;

    // gets user's geolocation and suggested address
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setAddress(data.features[0].place_name);
        setGeolocation(data.features[0].center);
      });
  };

  const getTime = () => {
    return new Date().getHours();
  };

  return (
    <>
      <CityInput changeHandler={changeHandler} submitHandler={submitHandler} />
      {weather === null ? null : (
        <WeatherContainer
          weather={weather}
          location={address}
          userTime={getTime()}
        />
      )}
    </>
  );
}

export default App;
