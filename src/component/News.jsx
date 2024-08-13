const { useState } = require("react");


const news_api_key = import.meta.env.VITE_NEWS_API_KEY;
function WeatherNews(){
    const[article,setArticle] = useState([]);
    const[error,setError]=useState(null);
}