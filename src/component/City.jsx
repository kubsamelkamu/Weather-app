import axios from "axios";
import { useEffect, useState } from "react";



function CitySearch({onWeatherData}){
  const[city,setCity] = useState('');
  const[error,setError] = useState(null);

  const openweathermap_api_key = import.meta.env.VITE_API_KEY;

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
        
      }
    }
  })
}