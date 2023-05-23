import React, { useEffect, useState } from 'react'

export function NewsPage({ newsObj }) {
    // const [news, setNews] = useState()
    // useEffect(() => { 
    //     if (newsObj) {
    //         setNews(newsObj)
    //     }
    // }, [])
    return (
        <>
            {
                newsObj ?
                    (
                        <div>{newsObj.title}</div>
                    )
                    :
                    <div>Loading...</div>
            }
        </>
    )
}
