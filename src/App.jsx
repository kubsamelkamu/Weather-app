import { useState } from "react";

function MainSection(){
  const[weatherDate,setWeatherDate] = useState(null);
  const[city,setCity] = useState(null);

  const handleWeatherData=(data)=>{
      setWeatherDate(data);
      setCity(data?data.name:'')
  }

  return(
    <div className="main-section-container flex-grow bg-gray-100 p-4 md:p-10">

    </div>
  )
}