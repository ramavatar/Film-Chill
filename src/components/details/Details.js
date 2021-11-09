import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../header/Header';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Badge } from "@material-ui/core";
export default function Details() {
    // using use history and use state for setting data and redirecting page
    const history = useHistory();
    const [details, setdetails] = useState([])
    const [video, setVideo] = useState();
    const { id } = useParams();
    const key = "04c35731a5ee918f014970082a0088b1";
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';

    // fetching from api with the particular id and key
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setdetails(data)
            })
            .catch(err => console.error(err))
            
            // setting watch trailer and home page button
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setVideo(data.results[0]?.key)
            })
            .catch(err => console.error(err))
    }, [])

    // redirecting to choose theatre if user clicked on the book movie button
    const Book = (id) => {
        history.push(`/choosetheater/${id}`)
    }

    return (
        <>
            <Header />
            {/* card to display the details */}
            <div className="container" style={{ paddingBottom: "2em" }}>
                <div className="row">
                    <div className="card m-4" style={{ flexDirection: 'row' }} >
                        <img src={IMG_URL + details.poster_path} className="card-img-top" style={{ width: "40%", height: "70vh" }} alt="No Image Found" />
                        <Badge
                            badgeContent={details.vote_average}
                            color={details.vote_average > 7 ? "primary" : "secondary"}
                        />
                        <div className="card-body">
                            <h4 className="card-title">{details.title}</h4>
                            <p className="card-text">
                                {details.overview}
                            </p>
                            {
                                details.status === "Released" ?
                                    <>
                                        <p className="card-text">
                                            <b>Released Date : </b><i>{details.release_date}</i>
                                            <span className="fa fa-thumbs-up m-2" style={{ float: 'right' , color:'blue'}}> <b style={{ color:'black'}}> {details.vote_count} </b> </span>
                                        </p>
                                        <p>
                                            <b>language : </b>{details.original_language}
                                        </p>
                                        {
                                        details.homepage !== "" ?
                                            <a className="btn btn-primary m-2"
                                                href={details.homepage} target="__blank">Home Page</a>
                                            : null
                                        }
                                        <a className="btn btn-danger m-2" href={`https://www.youtube.com/watch?v=${video}`} target="__blank">Watch Trailer</a>

                                        <a className="btn btn-warning m-2" onClick={Book.bind(this, details.title)}>Book Movie</a>
                                    </>
                                    :
                                    <>
                                        <p className="card-text">
                                            {details.tagline}
                                        </p>
                                        <a className="btn btn-outline-success m-2">Coming Soon</a>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}