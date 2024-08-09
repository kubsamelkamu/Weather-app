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

   const{name,main,weather,wind} = weatherData;
   const weatherIconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

   return(
    <div className="bg-white shadow-md rounded p-4 max-w-sm mx-auto md:max-w-md lg:max-w-lg">
        <h2 className="text-x1 font-bold mb-2">{name}</h2>
        <div className="flex items-center mb-4">
            <img src={weatherIconUrl} alt={weather[0].description} className="w-12 h-12 mr-4"/>
            <div>
              <p className="text-xl text-gray-700 capitalize">{weather[0].description}</p>
              <p className="text-3xl text-gray-800">{main.temp}°C</p>
            </div>
            <div className="text-gray-600">
              <p>Humidity: {main.humidity}%</p>
              <p>Wind Speed: {wind.speed} m/s</p>
            </div>
        </div>
       
    </div>
   );
}

export const Main = () => {
  return (
    <main className="flex-grow bg-gray-100 p-4 md:p-8">
      <CurrentWeather/>
    </main>
  );
};



export default CurrentWeather;