import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const openweathermap_api_key = import.meta.env.VITE_API_KEY;

function Forecast({ city, isVisible }) {
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      if (!city) {
        setForecastData(null);
        return;
      }

      try {
        const response = await axios(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${openweathermap_api_key}`
        );

        const dailyData = processForecastData(response.data);
        setForecastData(dailyData);
        setError(null);
      } catch (error) {
        setError(error);
        setError('Could not fetch forecast data. Please Enter Correct city Name.');
        setForecastData(null);
      }
    };

    fetchForecastData();
  }, [city]);

  const processForecastData = (data) => {
    const dailyData = [];
    const forecasts = data.list;
    for (let i = 0; i < forecasts.length; i += 8) {
      const daily = forecasts[i];
      dailyData.push({
        date: daily.dt_txt,
        temp: daily.main.temp,
        description: daily.weather[0].description,
        humidity: daily.main.humidity,
        windSpeed: daily.wind.speed,
        icon: daily.weather[0].icon,
      });
    }
    return dailyData;
  };

  return (
    <div className={`forecast-container transition-transform duration-500 ease-in-out ${isVisible ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="text-center mb-4 text-xl font-bold">5 Day Weather Forcast for {city}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {forecastData ? (
          forecastData.map((day, index) => (
            <div key={index} className="forecast-card bg-blue-200 p-4 rounded shadow-md">
              <h4 className="text-lg font-bold text-center">
                {new Date(day.date).toLocaleDateString('en-US',
                   { month: 'short',
                     day: 'numeric'
                   })}
              </h4>
              <img
                src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt={day.description}
                className="w-16 h-16 mx-auto"
              />
              <p className="text-center">{day.description}</p>
              <p className="text-center">Temp: {day.temp.toFixed(1)}°C</p>
              <p className="text-center">Humidity: {day.humidity}%</p>
              <p className="text-center">Wind: {day.windSpeed} m/s</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">Loading...</p>
        )}
      </div>
    </div>
  );
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  isVisible:PropTypes.bool.isRequired,
};

export default Forecast;
