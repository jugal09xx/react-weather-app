import React, { useState, useEffect } from "react";
import "boxicons";

const CurrentWeather = () => {
  const API_KEY = "a94c1d3eeb955babf9921f98343378ee";
  const API_KEY2 = "428205edac7a4b67bea1d7f119d64031";

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Vadodara");

  useEffect(() => {
    fetchWeather();
    fetchForecast();
  }, [query]);

  const fetchWeather = async () => {
    const data = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
    );
    const weather = await data.json();
    setWeather(weather);
  };

  const fetchForecast = async () => {
    const data = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${query}&key=${API_KEY2}`
    );
    const forecast = await data.json();
    setForecast(forecast.data);
    console.log(forecast.data)
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="body">
      <div className="search-form">
        <form className="form" onSubmit={getSearch}>
          <input
            type="text"
            value={search}
            onChange={updateSearch}
            className="search-bar"
            placeholder="Enter a city"
          />
          <button
            type="submit"
            className="search-button btn-outline-primary btn"
          >
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      {typeof weather.main != "undefined" ? (
        <div className="weather-form">
          <h1 className="city-name">
            {weather.name}, <b>{weather.sys.country}</b>
          </h1>
          <br />
          <p className="type">{weather.weather[0].main}</p>
          <p className="temp">{Math.floor(weather.main.temp)}°c</p>
          <p className="temp2">
            Feels like {Math.floor(weather.main.feels_like)}°c
          </p>
        </div>
      ) : (
        ""
      )}
      <div className="container-fluid">
        <div className="forecast-body">
          {forecast
            .slice(1, 6)
            .reverse()
            .map((forecastData) => (
              <div className="forecast-card">
                <ol key={forecastData.max_temp}>
                  <li>{Math.floor(forecastData.max_temp)}°c</li>
                  <li>{Math.floor(forecastData.min_temp)}°c</li>
                  <li className="desc">{forecastData.weather.description}</li>
                  <li>{forecastData.datetime.slice(5, 10)}</li>
                </ol>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
