import { useEffect, useState } from "react";

function Forecast({city}){
    const[forecastData,setForecastData] = useState(null);
    const[error,setError] = useState(null);

    useEffect(()=>{
        const fetchForeCastData = async()=>{
            if (!city) {
                setForecastData(null);
                return;
            }
        }

    })

}