import { useState } from "react";
import CitySearch from "./component/City";
import CurrentWeather from "./component/WeatherInfo";
import Forecast from "./component/ForecastWeather";

function MainSection(){
  const[weatherDate,setWeatherDate] = useState(null);
  const[city,setCity] = useState(null);
  const[showForecast,setShowForecast] = useState(false);

  const handleWeatherData=(data)=>{
      setWeatherDate(data);
      setCity(data?data.name:'')
      setShowForecast(false);
  }

  const toggleForecast=()=>{
    setShowForecast(!showForecast);
  };

  return(
    <div className="main-section-container flex-grow bg-gray-100 p-4 md:p-10">
      <CitySearch onWeatherData={handleWeatherData} />
      {weatherDate?(
        <>
          <CurrentWeather weatherData={weatherDate} />
          <div className="text-ceter mt-4">
              <button
                onClick={toggleForecast}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              >
                {showForecast?'Hide 5 Day forecast':'Show 5 Day forecast'}
              </button>
          </div>
          <Forecast city={city} />
        </>
      ):(
        <p className="text-center">Enter a city name to check the weather.</p>
      )}
    </div>
  );
}

export default MainSection;