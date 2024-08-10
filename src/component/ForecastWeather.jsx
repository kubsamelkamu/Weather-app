import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const openweathermap_api_key = import.meta.env.VITE_API_KEY;

function Forecast({ city }) {
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

        
      } catch (error) {

      }
    };

    fetchForecastData();
  }, [city]);

  const processForecastData = (data) => {
    // Process API response to get daily forecast data
    const dailyData = [];
    const forecasts = data.list;
    for (let i = 0; i < forecasts.length; i += 8) {
      const daily = forecasts[i];
      dailyData.push({
        date: daily.dt_txt,
        temp: daily.main.temp,
        description: daily.weather[0].description,
        icon: daily.weather[0].icon,
      });
    }
    return dailyData;
  };

  return (
    <div className="forecast-container">
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {forecastData ? (
          forecastData.map((day, index) => (
            <div key={index} className="forecast-card bg-blue-200 p-4 rounded shadow-md">
              <img
                src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt={day.description}
                className="w-16 h-16 mx-auto"
              />
              <h4 className="text-lg font-bold text-center">{new Date(day.date).toLocaleDateString()}</h4>
              <p className="text-center">{day.description}</p>
              <p className="text-center">Temp: {day.temp.toFixed(1)}°C</p>
            </div>
          ))
        ) : (
          <p className="text-center">Enter a city to see the forecast.</p>
        )}
      </div>
    </div>
  );
}


