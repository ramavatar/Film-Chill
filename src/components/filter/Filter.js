import React from 'react'
import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import Card from '../card/Card';
import Header from '../header/Header'
// import card from '../card/card';

export default function Filter() {
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const history = useHistory();
    const [show, setShow] = useState(false);
    // const [card, setcard] = useState([])
    const [movie, setmovie] = useState()
    const [search, setsearch] = useState("")
    const [card, setcard] = useState([])

    const handleModal = () => {
        setShow(!show);
        history.push("/movies");
    }

    const displaymovie = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=04c35731a5ee918f014970082a0088b1&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setcard(data.results)
                setShow(!show);
            })
    }

    const displayPopular = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setcard(data.results)
                setShow(!show);
            })
    }

    const displayHighestRated = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setcard(data.results)
                setShow(!show);
            })
    }

    const displaykidsMovies = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setcard(data.results)
                setShow(!show);
                // data.sources.map(item=>{item.id=="abc-movie"?setcard(item):null;})
            })
    }

    useEffect(() => {
        setShow(!show);
    }, [])

    return (
        <div id="filter">
            <Header/>
            <Modal show={show} onHide={handleModal}>
                <Modal.Header closeButton>Filter movie to read</Modal.Header>
                <Modal.Body>
                    <Menu menuButton={<MenuButton className="btn btn-success">Choose Filter...</MenuButton>}>
                        {/* <MenuItem onClick={displaymovie}>Endpoints</MenuItem> */}
                        {/* <SubMenu label="Endpoints"> */}
                            <MenuItem onClick={() => displaymovie('')}>In theatres</MenuItem>
                            <MenuItem onClick={() => displayPopular('')}>Popular Movies</MenuItem>
                            <MenuItem onClick={() => displayHighestRated('')}>highest rated movies rated R</MenuItem>
                            <MenuItem onClick={() => displaykidsMovies('')}>kids movies</MenuItem>
                    </Menu>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleModal} className="btn btn-danger">Close</Button>
                </Modal.Footer>
            </Modal>
            <div className="container" style={{ paddingBottom: "4em" }}>
                <div className="row">
                    {
                        <h1>hello</h1>,
                        card.map(item => <Card key={item.id} title={item.original_title} image={IMG_URL + item.poster_path} release_date={item.release_date} overview={item.overview} rating={item.vote_average}  voting={item.vote_count}/>)
                    }
                </div>
            </div>
        </div>
    );
}