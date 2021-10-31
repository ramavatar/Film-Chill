import React from 'react'
import Card from '../card/Card'
import { useState, useEffect } from 'react'
import Header from '../header/Header'
import './Movies.css'

export default function Dashboard() {

    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const [movieApi, setmovieApi] = useState([])
    
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                setmovieApi(data.results)
            })

    }, [])

    return (
        <>
            <Header />
            <div>
                <div className="container-fluild" style={{ paddingBottom: '6rem' }}>
                    <div className="row">
                        {
                            movieApi.map(item => <Card id={item.id} title={item.original_title} image={IMG_URL + item.poster_path} release_date={item.release_date} overview={item.overview} rating={item.vote_average} voting={item.vote_count} />)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
