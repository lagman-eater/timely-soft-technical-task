import React from 'react';
import noImage from '../images/noImage.jpg'
import { Link } from 'react-router-dom';

export function Home({ newsData, setNewsId, setRefreshPage, refreshPage }) {

    function truncate(str, n) {
        return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
    };

    return (
        <>
            <header>
                <h1>Diushembiev Aidar news API app</h1>
                <nav>
                    <button onClick={() => setRefreshPage(!refreshPage)} className='refresh-btn'>Нажмите для обновления</button>
                </nav>
            </header>
            <div className="main">
                <div className="news-cont">
                    {
                        newsData ? newsData.map(news => (
                            <div className="news-card" key={news.title}>
                                {
                                    news.urlToImage ?
                                        <div className="news-img"><img src={news.urlToImage} alt={news.title} /></div>
                                        :
                                        <div><img src={noImage} alt='No image available' /></div>
                                }
                                <div className="news-info">
                                    <Link className="news-title" onClick={() => setNewsId(news.title)} to={`/${news.title}`}>{news.title}</Link>
                                    <div className="news-line">
                                        <div>{news.author ? news.author : 'No author'}</div>
                                        <div className="news-date">{news.publishedAt}</div>
                                        <div className="news-language">EN</div>
                                    </div>
                                    <div className="news-desc" to={``}>{truncate(news.description, 500)}</div>
                                </div>
                            </div>
                        )) :
                            <div>Loading...</div>
                    }
                </div>
            </div>
        </>
    );
}

