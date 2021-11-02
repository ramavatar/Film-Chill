import React from 'react'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import Card from '../card/Card';
import Header from '../header/Header'

export default function Search() {

    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const [search, setsearch] = useState("");
    const [card, setcard] = useState([]);
    const history = useHistory();
    const [show, setShow] = useState(false);

    const handleModal = () => {
        setShow(!show);
        history.push("/movies");
    }

    const searchNews = (value) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=${search}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setcard(data.results);
                setShow(!show);
            })
    }

    useEffect(() => {
        setShow(!show);
    }, [])

    return (

        <div>
            <Header />


            {/* <input class="px-2 search" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn0" type="submit">Search</button> */}
            <form class="d-flex">
                <input type="text" onChange={(e) => { setsearch(e.target.value) }} className="form-control" placeholder="Search News" />
                <button className="btn btn-success col-12 mt-2 col-4" onClick={searchNews}>Search</button>
            </form>
            <div className="container" style={{ paddingBottom: "4em" }}>
                <div className="row">
                    {
                        card.map(item => <Card id={item.id} title={item.original_title} image={IMG_URL + item.poster_path} release_date={item.release_date} overview={item.overview} rating={item.vote_average} voting={item.vote_count} />)
                    }
                </div>
            </div>
        </div>
    )
}
