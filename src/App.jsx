import { useState } from "react";
import CitySearch from "./component/City";
import CurrentWeather from "./component/WeatherInfo";
import Forecast from "./component/ForecastWeather";

function MainSection(){
  const[weatherDate,setWeatherDate] = useState(null);
  const[city,setCity] = useState(null);

  const handleWeatherData=(data)=>{
      setWeatherDate(data);
      setCity(data?data.name:'')
  }

  return(
    <div className="main-section-container flex-grow bg-gray-100 p-4 md:p-10">
      <CitySearch onWeatherData={handleWeatherData} />
      {weatherDate?(
        <>
          <CurrentWeather weatherData={weatherDate} />
          <Forecast city={city} />
        </>
      ):(
        
      )}
    </div>
  )
}