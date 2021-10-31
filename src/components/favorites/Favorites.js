import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../header/Header';
import { useHistory } from 'react-router-dom';
import BookNow from '../bookNow/BookNow';

export default function FavoritesMovies() {
    const history = useHistory();
    const [allFavoritesMovies, setFavoritesMovies] = useState([])
    var arr = [];
    let cout = 0;
    fetch("http://localhost:3001/favorites")
        .then(res => res.json())
        .then(data => {
            data.map(item => {
                if (localStorage.getItem("token") == item.email) {
                    arr.push(item)
                    cout = cout + 1
                }
            })
            if (cout == 0) {
                history.push("/booknow")
            }
            setFavoritesMovies(arr)
            console.log(arr);
        })
        .catch(err => {
            console.error(err);
        });

    const RemoveFavorite = (id) => {
        let filteredFavorite = allFavoritesMovies.filter(x => x.id !== id)
        fetch(`http://localhost:3001/favorites/${id}`, {
            method: "DELETE"
        })
        setFavoritesMovies(filteredFavorite)
    }

    const Book = (id) => {
        history.push("/book")
    }

    return (
        // <>
        //     <Header />
        //     <div className="container" style={{ paddingBottom: "6em" }}>
        //         <div className="row">
        //             {
        //                 allFavoritesMovies.map(item => (
        //                     <div className="col-sm-12 md-12 col-lg-4 mt-4">
        //                         <div className="card" style={{ width: "20rem" }}>
        //                             <img src={item.image} style={{ height: '15rem' }} data-testid="image" className="card-img-top" alt="No image Found" />
        //                             <div className="card-body">
        //                                 <h6 className="card-title">{item.title}</h6>
        //                                 <p className="card-text">
        //                                     <a href="#">
        //                                         <span class="fa fa-heart m-2" style={{ color: 'red', float: 'left' }} onClick={RemoveFavorite.bind(this, item.id)}></span>
        //                                     </a>
        //                                     <span class="fa fa-star checked m-2" style={{ color: 'orange', paddingLeft: '12%' }}></span>
        //                                     {item.rating}
        //                                     <span className="fas fa-thumbs-up m-2" style={{ float: 'right' }}> {item.voting} Votes</span>
        //                                 </p>
        //                                 <a href="/book" className="btn btn-warning m-2 align-bottom">Book Movie</a>
        //                             </div>
        //                         </div>
        //                         ))
        //                     </div>
        //             }
        //     </div>
        //     </>
        <>
            <Header />
            <div className="container" style={{ paddingBottom: "6em" }}>
                <div className="row">
                    {
                        allFavoritesMovies.map(item => (
                            <div className="col-sm-12 md-12 col-lg-4 mt-4">
                                <div className="card" style={{ width: "20rem" }}>
                                    <img src={item.image} style={{ height: '15rem' }} data-testid="image" className="card-img-top" alt="No image Found" />
                                    <div className="card-body">
                                        <h6 className="card-title">{item.title}</h6>
                                        <p className="card-text">
                                            <a href="#">
                                                <span class="fa fa-heart m-2" style={{ color: 'red', float: 'left' }} onClick={RemoveFavorite.bind(this, item.id)}></span>
                                            </a>
                                            <span class="fa fa-star checked m-2" style={{ color: 'orange', paddingLeft: '12%' }}></span>
                                            {item.rating}
                                            <span className="fa fa-thumbs-o-up m-2" style={{ float: 'right' }}> {item.voting} Votes</span>
                                        </p>
                                        <button data-testid="btnReadLater" className="btn btn-warning m-2 align-bottom" onClick={Book}>Book Movie</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
        )
}
