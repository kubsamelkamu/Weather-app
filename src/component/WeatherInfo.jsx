import { useState} from "react";
import PropTypes from 'prop-types';
import CitySearch from "./City";



function CurrentWeather ({weatherData }) {
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { name, main, weather, wind } = weatherData;
  const weatherIconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="bg-white shadow-md rounded p-4 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <div className="flex items-center mb-4">
        <img src={weatherIconUrl} alt={weather[0].description} className="w-12 h-12 mr-4" />
        <div>
          <p className="text-xl text-gray-700 capitalize">{weather[0].description}</p>
          <p className="text-3xl text-gray-800">{main.temp}°C</p>
        </div>
      </div>
      <div className="text-gray-600">
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {wind.speed} m/s</p>
      </div>
    </div>
  );
};

CurrentWeather.propTypes ={
  weatherData: PropTypes.func.isRequired,
}

export const  MainSection = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div className="main-section-container">
      <CitySearch onWeatherData={handleWeatherData} />
      {weatherData ? (
        <CurrentWeather2 weatherData={weatherData} />
      ) : (
        <p className="text-center">Enter a city name to check the weather.</p>
      )}
    </div>
  );
};





export const Main = () => {
  return (
    <main className="flex-grow bg-gray-100 p-4 md:p-10">
      <CitySearch/>
   
    </main>
  );
};




export default CurrentWeather;