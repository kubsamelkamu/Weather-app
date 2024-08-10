import { useEffect, useState } from "react";

function CitySearch({onWeatherData}){
  const[city,setCity] = useState('');
  const[error,setError] = useState(null);

  useEffect(()=>{
    const fetchWeatherData = async()=>{
      if (!city) {
        return;
      }
    }
  })
}