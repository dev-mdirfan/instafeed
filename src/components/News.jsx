import { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import CategoryNews from './CategoryNews';

const News = ({apiKey, category }) => {
    const [articles, setArticles] = useState([]);
    // const [page, setPage] = useState(1);
    // const [totalResults, setTotalResults] = useState(0);

    const filteredArticles = (data) => {
        // Filter out articles with `null` in either `author`, `title`, `description`, `url`, or `urlToImage`
        return data.articles.filter(
            (article) =>
                article.title !== null &&
                article.description !== null &&
                article.url !== null &&
                article.urlToImage !== null
        );
    };

    const fetchNews = async () => {
        const base_url = "https://newsapi.org/v2/";
        let api_url;
        if (category !== 'null') {
            if (category == "general") {
                api_url = base_url + `top-headlines?q=all&apiKey=${apiKey}`;
            }
            else {
                api_url = base_url + `top-headlines?category=${category}&apiKey=${apiKey}`;
            }
        } else {
            api_url = base_url + `everything?q=all&apiKey=${apiKey}`;
        }
        const response = await fetch(api_url);
        const jsonData = await response.json();
        const newsData = filteredArticles(jsonData);

        if (jsonData.status === 'ok' && jsonData.articles.length > 0) {
            // console.log(jsonData.articles);
            setArticles(newsData);
        } else {
            // Do Not Show
            console.log(newsData);
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
            <CategoryNews />
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
