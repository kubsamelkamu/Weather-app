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