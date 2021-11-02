import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../header/Header';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
export default function Details() {
    const history = useHistory();
    const [details, setdetails] = useState([])
    const { id } = useParams();
    const key = "04c35731a5ee918f014970082a0088b1";
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${key}&page=1`)
            .then(response => response.json())
            .then(data => {
                data.results.map(item => {
                    if (item.id == id) {
                        console.log(item);
                        setdetails(item)
                    }
                })
            })
    }, [])

    const Book = (id) => {
        history.push(`/book/${id}`)
     }

    return (
        <>
            <Header />
            <div className="container" style={{ paddingBottom: "4em" }}>
                <div className="row">
                    <div className="card m-4" style={{ flexDirection: 'row' }}>
                        <img src={IMG_URL + details.poster_path} className="card-img-top" style={{ width: "80%", height: "70vh" }} alt="No Image Found" />
                        <div className="card-body">
                            <h4 className="card-title">{details.title}</h4>
                            <p className="card-text">
                                {details.overview}
                            </p>
                            <p className="card-text">
                                <i>{details.release_date}</i>
                                <a href="#">
                                    <span class="fa fa-heart-o m-2" style={{ color: 'red', paddingLeft: '15%' }} ></span>
                                </a>
                                <span class="fa fa-star checked m-2" style={{ color: 'orange', paddingLeft: '15%' }}></span> {details.vote_average}
                                <span className="fa fa-thumbs-up m-2" style={{ float: 'right' }}> {details.vote_count} Votes</span>
                            </p>
                            <a className="btn btn-warning m-2" onClick={Book.bind(this,details.id)}>Book Movie</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}