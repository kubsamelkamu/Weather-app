import { useState,useEffect } from "react";
import axios from "axios";

const weather_API_Key = import.meta.env.VITE_API_KEY;

function CurrentWeather(){
  const[weatherData,setWeatherData] = useState(null);
  const[error,setError] = useState(null);

   useEffect(()=>{
    const fetchWeatherData = async () =>{
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${weather_API_Key}`
        );
        setWeatherData(response.data);
      } catch (error) {
        setError(error.message);
        alert('Error getting weather data');
      }
    }

    fetchWeatherData();
   },[]);

   if (error) {
    return <div className="text-red-500">{error}</div>
   }


}