import axios from "axios";
import { useEffect, useState } from "react";


const openweathermap_api_key = import.meta.env.VITE_API_KEY;
function CitySearch({onWeatherData}){
  const[city,setCity] = useState('');
  const[error,setError] = useState(null);

 

  useEffect(()=>{
    const fetchWeatherData = async()=>{
      if (!city) {
        return;
      }

      try {
        const response = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${openweathermap_api_key}`
        )
        onWeatherData(response.data);
        setError('');
      } catch (error) {
        setError(error);
        setError('Could not fetch weather data. Please try again.');
        return;
        
      }
    }
    fetchWeatherData();
  },[])
}