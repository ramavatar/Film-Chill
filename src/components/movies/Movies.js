
import React from 'react'
import { useState, useEffect } from 'react';
export default function Movies() {
    const [allMovies, setAllMovies] = useState([])
    fetch("http://localhost:3001/movies")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAllMovies(data)
        })
        .catch(err => {
            console.error(err);
        });

    return (
        <div className="container" style={{ paddingBottom: "4em" }}>
            <div className="row">
                {
                    allMovies.map(item => (
                        <div className="col-sm-12 md-12 col-lg-4 mt-4">
                            <div className="card" style={{ width: "20rem" }}>
                                <img src={item.imageurl} style={{ height: '12rem' }} data-testid="image" className="card-img-top" alt="No image Found" />
                                <div className="card-body">
                                    <p className="card-text">{item.title}</p>
                                    <button data-testid="btnReadLater" className="btn btn-primary m-2" >Favorites</button>
                                    <button data-testid="btnReadLater" className="btn btn-warning m-4" >Book</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
