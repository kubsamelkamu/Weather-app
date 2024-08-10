import { useEffect, useState } from "react";
import axios from "axios";

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

    })

}