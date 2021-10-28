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
                                <div className="card mt-3 mr-3" style={{ flexDirection:'row'}}>
                                    <img src={item.image} className="card-img-top" style={{ width: "40%" , height: "75vh"}} alt="No Image Found" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">
                                            {item.overview}
                                        </p>
                                    </div>
                                </div>
                            </>
                        ))}
                </div>
            </div>
        </>
    )
}