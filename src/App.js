import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import axios from 'axios';
import { Home } from './Components/Home'
import { NewsPage } from './Components/NewsPage'
import { v4 as uuid } from 'uuid';

function App() {
  const [newsData, setNewsData] = useState()
  const [newsId, setNewsId] = useState()
  const [newsObj, setNewsObj] = useState()
  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=69a09d6a8a944617a5932d7b48be456f&pageSize=15')
      .then(response => setNewsData(response.data.articles))
      .catch(err => console.log(err))
  }, [])
  // newsData.map((news) => { news.id = uuid() })
  useEffect(() => {
    if (newsData) {
      newsData.map((news) => {
        if (news.title === newsId) {
          setNewsObj(news)
        }
      })
    }
  }, [newsId])
  // console.log(newsData);
  // console.log(newsId);
  return (
    <Routes>
      <Route path='/' element={<Home newsData={newsData} setNewsId={setNewsId} />} />
      <Route path='/:id' element={<NewsPage newsObj={newsObj} />} />
    </Routes>
  );
}

export default App;
