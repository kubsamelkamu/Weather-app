import { useState} from "react";
import PropTypes from 'prop-types';
import CitySearch from "./City";



function CurrentWeather ({weatherData }) {
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { name, main, weather,wind } = weatherData;
  const weatherIconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="bg-blue-500 text-white shadow-md rounded-lg p-8 max-w-3xl w-full mx-auto h-96 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-4">{name}</h2>
      <img src={weatherIconUrl} alt={weather[0].description} className="w-32 h-32 mb-4" />
      <p className="text-2xl">{weather[0].description}</p>
      <p className="text-2xl mb-2">Temperature:{main.temp}°C</p>
      <p className="text-2xl mb-2">Humidity: {main.humidity}%</p>
      <p className="text-2xl mb-2">Wind Speed: {wind.speed} m/s</p>
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
    <div className="main-section-container flex-grow bg-gray-100 p-4 md:p-10">
      <CitySearch onWeatherData={handleWeatherData} />
      {weatherData ? (
        <CurrentWeather weatherData={weatherData} />
      ) : (
        <p className="text-center">Enter a city name to check the weather.</p>
      )}
    </div>
  );
};


export default CurrentWeather;