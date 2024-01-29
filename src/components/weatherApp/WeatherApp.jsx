// `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`

import { useEffect } from "react";
import { useState } from "react";

function WeatherApp() {
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  const fetchData = (param) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setWeatherData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData("delhi");
  }, []);

  const handleSearch = () => {
    fetchData(search);
  };
  //   console.log( weatherData.weather && weatherData?.weather[0].description)
  return (
    <div>
      <div className="seachEngine">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="details">
        <h2>
          {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
        </h2>
        <h3>{Date().toLocaleString()}</h3>
        <h3>{weatherData?.main?.temp}</h3>
        <h4>{weatherData?.main?.humidity}</h4>
        <p>
          Wind Speed : <span>{weatherData?.wind?.speed}</span>
        </p>
        <p>
          Weather :{" "}
          <span>
            {weatherData.weather && weatherData?.weather[0].description}
          </span>
        </p>
      </div>
    </div>
  );
}

export default WeatherApp;
