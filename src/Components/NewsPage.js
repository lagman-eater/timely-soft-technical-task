import React from 'react'
import { Link } from 'react-router-dom'

export function NewsPage({ newsObj }) {
    return (
        <>
            <header>
                <h1>Diushembiev Aidar news API app</h1>
                <nav>
                    <Link to='/'>Home</Link>
                </nav>
            </header>
            {
                newsObj ?
                    (
                        <div className='main'>
                            <div className='news-page-cont'>
                                <h1>{newsObj.title}</h1>
                                <div className='news-page-img'><img src={newsObj.urlToImage} alt={newsObj.title} /></div>
                                <div className='news-line'>
                                    <div>{newsObj.author ? newsObj.author : 'No author'}</div>
                                    <div className="news-date">{newsObj.publishedAt}</div>
                                </div>
                                <div>{newsObj.content}</div>
                                <a href={newsObj.url}>Ссылка на сайт источник</a>
                            </div>
                        </div>
                    )
                    :
                    <div>Loading...</div>
            }
        </>
    )
}
