import { useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import { useEffect } from "react";

const news_api_key = import.meta.env.VITE_NEWS_API_KEY;
function WeatherNews({city}){
    const[articles,setArticles] = useState([]);
    const[error,setError]=useState(null);

    useEffect(()=>{
        const fetchNews = async()=>{
            if (!city) {
                setArticles([]);    
                return;            
            }

            try {
                const response = axios.get(
                    `https://newsapi.org/v2/everything?q=${city} weather OR climate change&apiKey=${news_api_key}&pageSize=5`
                )
                setArticles((await response).data.articles);
                setError(null);
            } catch (error) {
                setError(error);
                setError('could not fetch news article')
            }
        }
        fetchNews();
    },[city])

    return (
        <div className="weather-news mt-6">
          <h2 className="text-xl font-bold mb-4">Weather News and Articles for {city}</h2>
          {error && <p className="text-red-500">{error}</p>}
          <div className="news-articles grid gap-4">
            {articles.map((article, index) => (
              <div key={index} className="article-card bg-gray-200 p-4 rounded shadow">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-lg font-semibold">{article.title}</h3>
                  <p className="text-sm text-gray-700">{article.description}</p>
                  {article.urlToImage && (
                    <img src={article.urlToImage} alt={article.title} className="mt-2 rounded" />
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      );

}

WeatherNews.propTypes ={
    city: PropTypes.string.isRequired,
}