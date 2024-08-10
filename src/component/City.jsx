import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const openweathermap_api_key = import.meta.env.VITE_API_KEY;

function CitySearch({onWeatherData}){
  const[city,setCity] = useState('');
  const[error,setError] = useState(null);

  useEffect(()=>{
    const fetchWeatherData = async()=>{
      if (!city) {
        onWeatherData(null);
        return;
      }

      try {
        const response = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${openweathermap_api_key}`,
        )
        const forecast_response = await axios(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${openweathermap_api_key}`
        )
        onWeatherData(response.data);
        console.log(forecast_response.data.list);
        
        setError('');
      } catch (error) {
        setError(error);
        onWeatherData(null);
        setError('Could not fetch weather data. Please Enter Correct city Name.');
         
      }
    }
    fetchWeatherData();
  },[city, onWeatherData])


  const handleCityChange=(e)=>{
      setCity(e.target.value);
  }

  return (
    <div className="bg-white shadow-md rounded p-6 max-w-lg w-full mx-auto mb-4 h-56 flex flex-col justify-between">
      <img 
        src="https://openweathermap.org/img/wn/01d@2x.png" 
        alt="Weather Icon"
        className="w-16 h-16 mx-auto"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-bold mb-2 text-center">Search for a City</h3>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city name"
          className="w-full p-3 border border-gray-300 rounded mb-2"
        />
      </div>
      {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
    </div>
  );
}

CitySearch.propTypes ={
  onWeatherData: PropTypes.func.isRequired,
}

export default CitySearch;