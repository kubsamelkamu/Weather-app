import { useState } from "react";
import CurrentWeather from "./component/WeatherInfo";
import Forecast from "./component/ForecastWeather";
import CitySearch from "./component/City";
import Header from "./component/Header";
import Footer from "./component/Footer";

export function MainSection() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [showForecast, setShowForecast] = useState(false);

  const handleWeatherData = (data) => {
    setWeatherData(data);
    setCity(data ? data.name : '');
  };

  const toggleForecast = () => {
    setShowForecast(!showForecast);
  };

  return (
    <div className="main-section-container flex flex-col min-h-screen bg-gray-100 p-4 md:p-10">
      <div className="flex-grow">
        <CitySearch onWeatherData={handleWeatherData} />
        {weatherData ? (
          <>
            <CurrentWeather weatherData={weatherData} />
            <div className="text-center mt-4">
              <button
                onClick={toggleForecast}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              >
                {showForecast ? 'Hide 5 Day forecast' : 'Show 5 Day forecast'}
              </button>
            </div>
            <Forecast city={city} isVisible={showForecast} />
            <hr />
            <Footer/>
          </>
        ) : (
          <p className="text-center">Enter a city name to check the weather.</p>
        )}
      </div>
    </div>
  );
}


function App() {
 
  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <MainSection />
    
    </div>
  );
}



export default App;