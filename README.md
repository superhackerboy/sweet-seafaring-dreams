# Sweet Seafaring Dreams (WIP)

Entering a city will give you that city's current weather condition, associated weather icon and the temperature in Celsius and Fahrenheit. The words "Good night and sweet seafaring dreams" will appear on the page if the user's current time is between 18:00 and 04:00.

Data is pulled from two sources. OpenWeather's JSON list of 200,000 cities (`/src/cityList.json`) where a city's name is matched with an ID. The ID is then used to call OpenWeather's API to get that city's current weather data.

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

## Issues

The original idea I had before creating this project was to use react-select, an NPM package used to display an updated dropdown search to sift through the 200,000 cities as the user is typing. However, the json list is too large for it to work properly. The user is now forced to enter the full name of their city without any typos. Even then, the json list will only return the first exact match (e.g. searching "Miami" will return a Miami in Manitoba, Canada).

## Installing

Start Server

```
npm start
```

## Built With

- [React](http://reactjs.org/) - Javascript frontend framework
- [OpenWeather](https://openweathermap.org/) - Weather API
- [Font Awesome](https://fontawesome.com) - Weather icons

## License

This project is licensed under the [MIT License](LICENSE).
