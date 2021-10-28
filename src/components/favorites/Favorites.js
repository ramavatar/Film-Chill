
import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../header/Header';

export default function FavoritesMovies() {

    const [allFavoritesMovies, setFavoritesMovies] = useState([])
    var arr = [];
    fetch("http://localhost:3001/favorites")
        .then(res => res.json())
        .then(data => {
           data.map(item=>{
               if(localStorage.getItem("token")==item.userName){
                    arr.push(item)
               }
           })
           setFavoritesMovies(arr)
           console.log(arr);
        })
        .catch(err => {
            console.error(err);
        });

    return (
        <>
        <Header/>
        <div className="container" style={{ paddingBottom: "4em" }}>
            <div className="row">
                {
                    allFavoritesMovies.map(item => (
                        <div className="col-sm-12 md-12 col-lg-4 mt-4">
                            <div className="card" style={{ width: "20rem" }}>
                                <img src={item.image} style={{ height: '10rem' }} data-testid="image" className="card-img-top" alt="No image Found" />
                                <div className="card-body">
                                    <h6 className="card-title">{item.title}</h6>
                                    <i className="card-text">{item.overview}</i>
                                    <button data-testid="btnReadLater" className="btn btn-warning m-2" >Book Movies</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
        </>
    )
}
