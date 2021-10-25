
import React from 'react'
import { useState, useEffect } from 'react';
export default function Movies() {
    const [allMovies, setAllMovies] = useState([])
    var axios = require("axios").default;
    var options = {
        method: 'GET',
        url: 'https://ott-details.p.rapidapi.com/advancedsearch',
        params: {
            start_year: '1970',
            end_year: '2020',
            min_imdb: '6',
            max_imdb: '7.8',
            genre: 'action',
            language: 'english',
            type: 'movie',
            sort: 'latest',
            page: '1'
        },
        headers: {
            'x-rapidapi-host': 'ott-details.p.rapidapi.com',
            'x-rapidapi-key': '9f9b3cad2emshf11dac593f97c02p18fa62jsn81a8130db8f2'
        }
    };

    axios.request(options).then(function (response) {
        
        setAllMovies(response.data.results)
    }).catch(function (error) {
        // console.error(error);
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
