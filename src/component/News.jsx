import { useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import { useEffect } from "react";

const news_api_key = import.meta.env.VITE_NEWS_API_KEY;
function WeatherNews({city}){
    const[article,setArticle] = useState([]);
    const[error,setError]=useState(null);

    useEffect(()=>{
        const fetchNews = async()=>{
            if (!city) {
                setArticle([]);    
                return;            
            }

            try {
                const response = axios.get(
                    `https://newsapi.org/v2/everything?q=${city} weather OR climate change&apiKey=${news_api_key}&pageSize=5`
                )
                setArticle((await response).data.articles);
                setError(null);
            } catch (error) {
                
            }
        }
    })


}

WeatherNews.propTypes ={
    city: PropTypes.string.isRequired,
}