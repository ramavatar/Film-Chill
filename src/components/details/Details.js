import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../header/Header';
export default function Details() {
    const [details, setdetails] = useState([])
    fetch("http://localhost:3001/details")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setdetails(data)
        })
        .catch(err => {
            console.error(err);
        });
    return (
        <>
            <Header />
            <div className="container" style={{ paddingBottom: "4em" }}>
                <div className="row">
                    {
                        details.map(item => (
                            <>
                                <div className="card m-4" style={{ flexDirection: 'row' }}>
                                    <img src={item.image} className="card-img-top" style={{ width: "40%", height: "70vh" }} alt="No Image Found" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">
                                            {item.overview}
                                        </p>
                                        <p className="card-text">
                                            <i>{item.releaseDate}</i>
                                            <a href="#">
                                                <span class="fa fa-heart-o m-2" style={{ color: 'red', paddingLeft: '15%' }} ></span>
                                            </a>
                                            <span class="fa fa-star checked m-2" style={{ color: 'orange', paddingLeft: '15%' }}></span> {item.rating}
                                            <span className="fa fa-thumbs-o-up m-2" style={{ float: 'right' }}> {item.voting} Votes</span>
                                        </p>
                                        <button className="btn btn-warning m-2" >Book Movie</button>
                                    </div>
                                </div>
                            </>
                        ))}
                </div>
            </div>
        </>
    )
}