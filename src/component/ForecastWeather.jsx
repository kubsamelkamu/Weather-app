import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';


const openweathermap_api_key = import.meta.env.VITE_API_KEY;
function Forecast({city}){
    const[forecastData,setForecastData] = useState(null);
    const[error,setError] = useState(null);

    useEffect(()=>{
        const fetchForeCastData = async()=>{
            if (!city) {
                setForecastData(null);
                return;
            }

            try {
                const response = await axios.get(
                     `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${}`
                )
                
            } catch (error) {
                
            }
        }
        fetchForeCastData();

    },[city])

}


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