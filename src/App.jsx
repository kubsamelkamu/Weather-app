import { useState } from "react";

function MainSection(){
  const[weatherDate,setWeatherDate] = useState(null);
  const[city,setCity] = useState(null);

  const handleWeatherData=(data)=>{
      setWeatherDate(data);
      setCity(data?data.name:'')
  }
}