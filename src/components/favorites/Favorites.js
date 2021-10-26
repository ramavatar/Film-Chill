
import React from 'react'
import { useState, useEffect } from 'react';

export default function FavoritesMovies() {
    const [allFavoritesMovies, setFavoritesMovies] = useState([])
    fetch("http://localhost:3001/favoritesMovies")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setFavoritesMovies(data)
        })
        .catch(err => {
            console.error(err);
        });

    return (
        <div className="container" style={{ paddingBottom: "4em" }}>
            <div className="row">
                {
                    allFavoritesMovies.map(item => (
                        <div className="col-sm-12 md-12 col-lg-4 mt-4">
                            <div className="card" style={{ width: "20rem" }}>
                                <img src={item.imageurl} style={{ height: '10rem' }} data-testid="image" className="card-img-top" alt="No image Found" />
                                <div className="card-body">
                                    <h6 className="card-title">{item.title}</h6>
                                    <i className="card-text">Rating : {item.imdbrating}</i>
                                    <p className="card-text">Released Year : {item.released}</p>
                                    <button data-testid="btnReadLater" className="btn btn-warning m-2" >Book Movies</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}
