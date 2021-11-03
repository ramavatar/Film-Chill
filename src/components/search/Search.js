import React from 'react'
import { useState, useEffect } from 'react';
import Card from '../card/Card';
import Header from '../header/Header'
import { useParams } from 'react-router-dom';
export default function Search() {

    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const { search } = useParams();
    const [card, setcard] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=${search}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setcard(data.results);
            })
    }, [])

    return (

        <div>
            <Header />
            <div className="container" style={{ paddingBottom: "4em" }}>
                <div className="row">
                    {
                        card.map(item => <Card  title={item.original_title} image={IMG_URL + item.poster_path} release_date={item.release_date} overview={item.overview} rating={item.vote_average} voting={item.vote_count} />)
                    }
                </div>
            </div>
        </div>
    )
}
