import { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const News = () => {
    const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
    const [articles, setArticles] = useState([]);

    const fetchNews = async () => {
        const response = await fetch(
            `https://newsapi.org/v2/everything?q=us&apiKey=${API_KEY}`
        );
        const jsonData = await response.json();
        if (jsonData.status === 'ok' && jsonData.articles.length > 0) {
            // console.log(jsonData.articles);
            setArticles(jsonData.articles);
        } else {
            // Do Not Show
            console.log(jsonData);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <>
            <h1 className="text-2xl font-medium ms-10 my-3 text-center">
                Latest Feed On Technology
            </h1>
            <div className='text-center my-5'>
                <span class="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-lg font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mx-3 cursor-pointer">
                    Sports
                </span>
                <span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-lg font-medium text-red-700 ring-1 ring-inset ring-red-600/10 mx-3 cursor-pointer">
                    Entertainment
                </span>
                <span class="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-lg font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 mx-3 cursor-pointer">
                    Technology
                </span>
                <span class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-lg font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mx-3 cursor-pointer">
                    Politics
                </span>
                <span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-lg font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mx-3 cursor-pointer">
                    Health
                </span>
                <span class="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-lg font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 mx-3 cursor-pointer">
                    Science
                </span>
                <span class="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-lg font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 mx-3 cursor-pointer">
                    Business
                </span>
            </div>
            <div className="container ms-10">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {articles.map((element) => {
                        return (
                            <div key={element.url}>
                                <NewsItem articles={element} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default News;
