import { useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";

const news_api_key = import.meta.env.VITE_NEWS_API_KEY;
function WeatherNews({city}){
    const[article,setArticle] = useState([]);
    const[error,setError]=useState(null);
}

WeatherNews.propTypes ={
    city: PropTypes.string.isRequired,
}