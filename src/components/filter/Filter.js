import React from 'react'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import Card from '../card/Card';
import Header from '../header/Header';
import './Filter.css';
export default function Filter() {
    const key = "04c35731a5ee918f014970082a0088b1";
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const history = useHistory();
    const [search, setsearch] = useState("");
    const [show, setShow] = useState(false);
    const [card, setcard] = useState([])

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

    const displayPopular = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setcard(data.results)
                setShow(!show);
            })
    }

    const displayHighestRated = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${key}&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setcard(data.results)
                setShow(!show);
            })
    }

    const displaykidsMovies = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${key}&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setcard(data.results)
                setShow(!show);
            })
    }

    useEffect(() => {
        setShow(!show);
    }, [])

    return (
        <div id="filter">
            <Header />
            <Modal show={show} onHide={handleModal}>
                <Modal.Header closeButton>Filter movie to read</Modal.Header>
                <Modal.Body>
                    <Menu menuButton={<MenuButton className="btn btn-success">Choose Filter...</MenuButton>}>
                        <MenuItem onClick={() => displayPopular('')}>Popular Movies</MenuItem>
                        <MenuItem onClick={() => displayHighestRated('')}>highest rated movies rated R</MenuItem>
                        <MenuItem onClick={() => displaykidsMovies('')}>kids movies</MenuItem>
                        <SubMenu label="Search Movies">
                            <input type="text" onChange={(e) => { setsearch(e.target.value) }} className="form-control" placeholder="Search News" />
                            <button className="btn btn-success col-12 mt-2 col-4" onClick={searchNews}>Search</button>
                        </SubMenu>
                    </Menu>
                </Modal.Body>
            </Modal>
            <div className="container-fluid" style={{ paddingBottom: "4em" }}>
                <div className="row">
                    {
                        card.map(item => <Card title={item.original_title} image={IMG_URL + item.poster_path} release_date={item.release_date} overview={item.overview} rating={item.vote_average} voting={item.vote_count} />)
                    }
                </div>
            </div>
        </div>
    );
}