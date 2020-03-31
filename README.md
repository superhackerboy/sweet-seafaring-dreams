# Sweet Seafaring Dreams

Entering a city will give you that city's weather conditions tomorrow, associated weather icon and the temperature in Celsius and Fahrenheit. The words "Good night and sweet seafaring dreams" will appear on the page if the user's current time is between 18:00 and 04:00.

## Sample API Response

```
{
  "coord": {
    "lon": 167.31,
    "lat": 9.18
  },
  "weather": [
    {
      "id": 701,
      "main": "Mist",
      "description": "mist",
      "icon": "50d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 300.15,
    "feels_like": 299.61,
    "temp_min": 300.15,
    "temp_max": 300.15,
    "pressure": 1012,
    "humidity": 88
  },
  "visibility": 4828,
  "wind": {
    "speed": 9.8,
    "deg": 50,
    "gust": 13.9
  },
  "clouds": {
    "all": 90
  },
  "dt": 1583183974,
  "sys": {
    "type": 1,
    "id": 7889,
    "country": "MH",
    "sunrise": 1583175836,
    "sunset": 1583218911
  },
  "timezone": 43200,
  "id": 7303502,
  "name": "Kwajalein Atoll",
  "cod": 200
}
```

## Installing

Start Server

```
npm start
```

## Built With

- [React](http://reactjs.org/) - Javascript frontend framework
- [OpenWeather](https://openweathermap.org/) - Weather API
- [Mapbox](https://openweathermap.org/) - Geolocation
- [Font Awesome](https://fontawesome.com) - Weather icons

## License

This project is licensed under the [MIT License](LICENSE).
