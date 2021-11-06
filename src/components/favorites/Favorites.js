import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../header/Header';
import { useHistory } from 'react-router-dom';
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
       if(id==undefined){
          alert("Movies Not in Theater")
       }
       else{
        history.push(`/choosetheater/${id}`)
       }
     }

     const displayDetails = (id) => {
        if (id != undefined) {
            history.push(`/details/${id}`)
        }

    }
     

    return (
        <>
            <Header />
            <div id="favorites" className="container-fluid" style={{ padding: "2em" ,paddingTop:'0em' ,paddingBottom:'6rem'}}>
                <div className="row">
                    {
                        allFavoritesMovies.map(item => (
                            <div className=" col-xs-12 col-sm-6 col-md-4 col-lg-3 mt-4">
                                <div className="card">
                                    <img src={item.image} style={{ height: '15rem' }} data-testid="image" className="card-img-top" alt="No image Found" onClick={displayDetails.bind(this, item.key)} />
                                    <div className="card-body">
                                        <h6 className="card-title">{item.title}</h6>
                                        <p className="card-text">
                                            <a href="#">
                                                <span class="fa fa-heart m-2" style={{ color: 'red', float: 'left' }} onClick={RemoveFavorite.bind(this, item.id)}></span>
                                            </a>
                                            <span class="fa fa-star checked m-2" style={{ color: 'orange', paddingLeft: '12%' }}></span>
                                            {item.rating}
                                            <span className="fa fa-thumbs-up m-2" style={{ float: 'right' }}> {item.voting} Votes</span>
                                        </p>
                                        <button data-testid="btnReadLater" className="btn btn-warning m-2 align-bottom" onClick={Book.bind(this,item.key)}>Book Movie</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}
