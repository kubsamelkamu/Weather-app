import axios from "axios";
import { useEffect, useState } from "react";



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
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
        )
      } catch (error) {
        
      }
    }
  })
}