import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../card/Card';
import Header from '../header/Header';
import CustomPagination from '../pagination/Pagination';
export default function FilterBestDrama() {
    // function to filter the best drama movie
    const key = "04c35731a5ee918f014970082a0088b1";
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const [page, setPage] = useState(4);
    const [totalpage, setTotalPage] = useState("");
    const [card, setcard] = useState([])

    // fecting details from the api
    const fetchDrama = async () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2021&api_key=${key}&page=${page}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setcard(data.results)
                setTotalPage(data.total_pages)
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        window.scroll(0, 0);
        fetchDrama();
    }, [page]);

    return (
        <div>
            <Header />
            {/* mapping and calling card component */}
            <div className="container-fluid" style={{ paddingBottom: "6em" }}>
                <div className="row">
                    {
                        card.map(item => <Card id={item.id} title={item.original_title} image={IMG_URL + item.poster_path} release_date={item.release_date} overview={item.overview} rating={item.vote_average} voting={item.vote_count} />)
                    }
                </div>
                <CustomPagination setPage={setPage} totalpage={totalpage} />
            </div>
        </div>
    )
}