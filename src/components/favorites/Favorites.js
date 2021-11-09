import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../header/Header';
import { useHistory } from 'react-router-dom';
import { Badge } from "@material-ui/core";

export default function FavoritesMovies() {
    const history = useHistory();
    const [allFavoritesMovies, setFavoritesMovies] = useState([])
    // srray to store the favourite movies
    var arr = [];
    let cout = 0;

    // fetching from json server matching with the user's email
    fetch("http://localhost:3001/favorites")
        .then(res => res.json())
        .then(data => {
            data.map(item => {
                if (localStorage.getItem("token") === item.email) {
                    arr.push(item)
                    cout = cout + 1
                }
            })
            // if favourite section is empty, user haven't added any movie to favourite
            if (cout === 0) {
                history.push("/booknow")
            }
            // setting the movie in favourite
            setFavoritesMovies(arr)
            console.log(arr);
        })
        .catch(err => {
            console.error(err);
        });

        // remove from favourite section
    const RemoveFavorite = (id) => {
        let filteredFavorite = allFavoritesMovies.filter(x => x.id !== id)
        fetch(`http://localhost:3001/favorites/${id}`, {
            method: "DELETE"
        })
        setFavoritesMovies(filteredFavorite)
    }

    // if id of the movie is undefined then display that movie is not in theatre otherwise redirect it to choose theatre component if book movie option is clicked by the user
    const Book = (id) => {
        if (id == undefined) {
            alert("Movies Not in Theater")
        }
        else {
            history.push(`/choosetheater/${id}`)
        }
    }

    // display movie info function
    const displayDetails = (id) => {
        if (id != undefined) {
            history.push(`/details/${id}`)
        }

    }

    return (
        <>
            <Header />
            {/* card to display all the favourite movies */}
            <div id="favorites" className="container-fluid" style={{ padding: "2em", paddingTop: '0em', paddingBottom: '6rem' }}>
                <div className="row">
                    {
                        allFavoritesMovies.map(item => (
                            <div className=" col-xs-12 col-sm-6 col-md-4 col-lg-3 mt-4">
                                <div className="card">
                                    <Badge
                                        badgeContent={item.rating}
                                        color={item.rating > 7 ? "primary" : "secondary"}
                                    />
                                    <img src={item.image} style={{ height: '15rem' }} id="image" className="card-img-top" alt="No image Found" onClick={displayDetails.bind(this, item.key)} />
                                    <div className="card-body">
                                        <h6 className="card-title">{item.title}</h6>
                                        <p className="card-text">
                                            <a href="#">
                                                <span class="fa fa-heart m-2" style={{ color: 'red', float: 'left' }} onClick={RemoveFavorite.bind(this, item.id)}></span>
                                            </a>
                                            <span className="fa fa-thumbs-up m-2" style={{ float: 'right' }}> {item.voting} Votes</span>
                                        </p>
                                        <button id="book" className="btn btn-warning m-2 align-bottom" onClick={Book.bind(this, item.title)}>Book Movie</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}
