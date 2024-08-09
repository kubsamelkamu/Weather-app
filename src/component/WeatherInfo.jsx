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

   if (!weatherData) {
     return <div>Loading....</div>
   }

   return(
    <div className="bg-white shadow-md rounded p-4 max-w-sm mx-auto">
        <h2 className="text-x1 font-bold">{weatherData.name}</h2>
        <p className="text-gray-700">{weatherData.weather[0].description}</p>
        <p className="text-gray-800 text-lg">{weatherData.main.temp}°C</p>
    </div>
   );
}

export default CurrentWeather;